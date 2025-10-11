document.addEventListener("DOMContentLoaded", () => {
    let currentFilter = 'all';
    let searchTerm = '';
    const progress = {};
    const progressLog = [];
    
    // Pagination state for progress log
    let currentLogPage = 1;
    const logsPerPage = 10;

    // API helper functions
    async function apiRequest(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    async function saveProgress() {
        try {
            await Promise.all([
                apiRequest('/api/progress', {
                    method: 'POST',
                    body: JSON.stringify(progress)
                }),
                apiRequest('/api/progress-log', {
                    method: 'POST',
                    body: JSON.stringify(progressLog)
                })
            ]);
            updateStats();
        } catch (error) {
            console.error('Failed to save progress:', error);
            alert('Failed to save progress. Please try again.');
        }
    }

    async function loadProgress() {
        try {
            const [savedProgress, savedLog] = await Promise.all([
                apiRequest('/api/progress'),
                apiRequest('/api/progress-log')
            ]);

            Object.assign(progress, savedProgress);
            progressLog.splice(0, progressLog.length, ...savedLog);
            updateStats();
        } catch (error) {
            console.error('Failed to load progress:', error);
            alert('Failed to load progress data. Please refresh the page.');
        }
    }

    function toggleTopic(topicId) {
        progress[topicId] = !progress[topicId];

        // Find topic title for logging
        let topicTitle = '';
        roadmapData.phases.forEach(phase => {
            phase.weeks.forEach(week => {
                week.topics.forEach(topic => {
                    if (topic.id === topicId) {
                        topicTitle = topic.title;
                    }
                });
            });
        });

        // Add to progress log with Pakistani timezone (+5 GMT)
        const pakistaniTime = new Date(new Date().getTime() + (60 * 60 * 1000));
        const logEntry = {
            topicId: topicId,
            topicTitle: topicTitle,
            action: progress[topicId] ? 'completed' : 'uncompleted',
            timestamp: pakistaniTime.toISOString(),
            date: pakistaniTime.toLocaleDateString('en-PK', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: 'Asia/Karachi'
            }),
            time: pakistaniTime.toLocaleTimeString('en-PK', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Karachi'
            })
        };

        progressLog.push(logEntry);

        saveProgress();
        updateTopicUI(topicId);
        updatePhaseProgress();
    }

    function updateTopicUI(topicId) {
        const topicElement = document.querySelector(`[data-topic-id="${topicId}"]`);
        if (topicElement) {
            const checkbox = topicElement.querySelector('.checkbox');
            const isCompleted = progress[topicId];
            
            // Update checkbox
            if (isCompleted) {
                checkbox.classList.add('checked');
                topicElement.classList.add('completed');
            } else {
                checkbox.classList.remove('checked');
                topicElement.classList.remove('completed');
            }
        }
    }

    function updatePhaseProgress() {
        roadmapData.phases.forEach(phase => {
            let phaseCompleted = 0;
            let phaseTotal = 0;
            
            phase.weeks.forEach(week => {
                week.topics.forEach(topic => {
                    phaseTotal++;
                    if (progress[topic.id]) phaseCompleted++;
                });
            });

            const phaseProgress = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;
            
            // Update phase progress bar
            const progressBar = document.querySelector(`#content-${phase.id}`).parentElement.querySelector('.phase-progress-bar');
            if (progressBar) {
                progressBar.style.width = phaseProgress + '%';
            }
            
            // Update phase completion text
            const phaseStats = document.querySelector(`#content-${phase.id}`).parentElement.querySelector('.phase-stats');
            if (phaseStats) {
                phaseStats.textContent = `${phaseCompleted}/${phaseTotal} topics completed`;
            }
        });
    }

    function updateStats() {
        let totalTopics = 0;
        let completedTopics = 0;
        let currentPhase = '-';

        roadmapData.phases.forEach(phase => {
            phase.weeks.forEach(week => {
                week.topics.forEach(topic => {
                    totalTopics++;
                    if (progress[topic.id]) {
                        completedTopics++;
                    }
                });
            });
        });

        for (let phase of roadmapData.phases) {
            let phaseComplete = true;
            for (let week of phase.weeks) {
                for (let topic of week.topics) {
                    if (!progress[topic.id]) {
                        phaseComplete = false;
                        break;
                    }
                }
                if (!phaseComplete) break;
            }
            if (!phaseComplete) {
                currentPhase = phase.title.split(':')[0];
                break;
            }
        }

        if (completedTopics === totalTopics && totalTopics > 0) {
            currentPhase = 'Complete! 🎉';
        }

        const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

        document.getElementById('totalCompleted').textContent = completedTopics;
        document.getElementById('totalTopics').textContent = totalTopics;
        document.getElementById('overallProgress').textContent = progressPercent + '%';
        document.getElementById('currentPhase').textContent = currentPhase;
    }

    function renderRoadmap() {
        const container = document.getElementById('roadmapContent');
        container.innerHTML = '';

        roadmapData.phases.forEach(phase => {
            const phaseEl = document.createElement('div');
            phaseEl.className = 'phase';

            let phaseCompleted = 0;
            let phaseTotal = 0;
            phase.weeks.forEach(week => {
                week.topics.forEach(topic => {
                    phaseTotal++;
                    if (progress[topic.id]) phaseCompleted++;
                });
            });

            const phaseProgress = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;

            phaseEl.innerHTML = `
                    <div class="phase-header" onclick="togglePhase('${phase.id}')">
                        <div>
                            <h2>${phase.title}</h2>
                            <div class="phase-duration">${phase.duration}</div>
                            <div class="phase-stats">${phaseCompleted}/${phaseTotal} topics completed</div>
                            <div class="phase-progress">
                                <div class="phase-progress-bar" style="width: ${phaseProgress}%"></div>
                            </div>
                        </div>
                        <i class="fas fa-chevron-down toggle-icon" id="toggle-${phase.id}"></i>
                    </div>
                    <div class="phase-content" id="content-${phase.id}">
                        ${renderWeeks(phase.weeks)}
                    </div>
                `;

            container.appendChild(phaseEl);
        });

        applyFilters();
    }

    function renderWeeks(weeks) {
        return weeks.map(week => `
                <div class="week">
                    <div class="week-header">
                        <h3 class="week-title">${week.title}</h3>
                        <span class="week-time">
                            <i class="fas fa-clock"></i>
                            ${week.time}
                        </span>
                    </div>
                    ${renderTopics(week.topics)}
                </div>
            `).join('');
    }

    function renderResourcesByType(resources, topicId) {
        // Group resources by type
        const resourcesByType = resources.reduce((acc, resource) => {
            const type = resource.type === 'doc' ? 'links' : resource.type;
            if (!acc[type]) {
                acc[type] = [];
            }
            acc[type].push(resource);
            return acc;
        }, {});

        // Define type labels and icons
        const typeConfig = {
            youtube: { label: 'YouTube Videos', icon: '<i class="fab fa-youtube"></i>' },
            links: { label: 'Documentation & Links', icon: '<i class="fas fa-link"></i>' }
        };

        return Object.entries(resourcesByType).map(([type, typeResources]) => {
            const config = typeConfig[type] || { label: type.charAt(0).toUpperCase() + type.slice(1), icon: '📄' };
            return `
                <div class="resource-accordion">
                    <div class="resource-accordion-header" onclick="toggleResourceAccordion('${topicId}-${type}')">
                        <span class="resource-type-icon">${config.icon}</span>
                        <span class="resource-type-label">${config.label} (${typeResources.length})</span>
                        <i class="fas fa-chevron-down resource-toggle-icon" id="toggle-${topicId}-${type}"></i>
                    </div>
                    <div class="resource-accordion-content" id="content-${topicId}-${type}">
                        <div class="resource-list">
                            ${typeResources.map(resource => `
                                <a href="${resource.url}" target="_blank" class="resource-link ${resource.type === 'youtube' ? 'youtube-link' : ''}">
                                    ${resource.type === 'youtube' ? '<i class="fab fa-youtube"></i>' : '<i class="fas fa-external-link-alt"></i>'} ${resource.title}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderTopics(topics) {
        return topics.map(topic => {
            const isCompleted = progress[topic.id];
            return `
                    <div class="topic ${isCompleted ? 'completed' : ''}" data-topic-id="${topic.id}">
                        <div class="topic-header">
                            <div class="checkbox ${isCompleted ? 'checked' : ''}" onclick="toggleTopic('${topic.id}')"></div>
                            <span class="topic-title">${topic.title}</span>
                            <button class="expand-btn" onclick="toggleDetails('${topic.id}')">
                                <i class="fas fa-info-circle"></i>
                                Details
                            </button>
                        </div>
                        <div class="topic-details" id="details-${topic.id}">
                            <div class="detail-section">
                                <h4><i class="fas fa-book"></i> Description</h4>
                                <p>${topic.description}</p>
                            </div>
                            <div class="detail-section">
                                <h4><i class="fas fa-target"></i> What You'll Learn</h4>
                                <ul>
                                    ${topic.whatYouLearn.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="detail-section">
                                <h4><i class="fas fa-external-link-alt"></i> Resources</h4>
                                <div class="resources-accordion">
                                    ${renderResourcesByType(topic.resources, topic.id)}
                                </div>
                            </div>
                            <div class="detail-section">
                                <h4><i class="fas fa-exchange-alt"></i> Alternatives</h4>
                                <p>${topic.alternatives}</p>
                            </div>
                            <div class="detail-section">
                                <h4><i class="fas fa-laptop-code"></i> Hands-on Practice</h4>
                                <p>${topic.handson}</p>
                            </div>
                        </div>
                    </div>
                `;
        }).join('');
    }

    function togglePhase(phaseId) {
        const content = document.getElementById(`content-${phaseId}`);
        const toggle = document.getElementById(`toggle-${phaseId}`);

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            toggle.classList.remove('rotated');
        } else {
            content.classList.add('active');
            toggle.classList.add('rotated');
        }
    }

    function toggleDetails(topicId) {
        const details = document.getElementById(`details-${topicId}`);
        details.classList.toggle('active');
    }

    function toggleResourceAccordion(accordionId) {
        const content = document.getElementById(`content-${accordionId}`);
        const toggle = document.getElementById(`toggle-${accordionId}`);

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            toggle.classList.remove('rotated');
        } else {
            content.classList.add('active');
            toggle.classList.add('rotated');
        }
    }

    function applyFilters() {
        const topics = document.querySelectorAll('.topic');

        topics.forEach(topic => {
            const topicId = topic.getAttribute('data-topic-id');
            const isCompleted = progress[topicId];
            const topicText = topic.textContent.toLowerCase();

            let showTopic = true;

            if (currentFilter === 'completed' && !isCompleted) {
                showTopic = false;
            } else if (currentFilter === 'pending' && isCompleted) {
                showTopic = false;
            }

            if (searchTerm && !topicText.includes(searchTerm.toLowerCase())) {
                showTopic = false;
            }

            topic.style.display = showTopic ? 'block' : 'none';
        });

        document.querySelectorAll('.week').forEach(week => {
            const visibleTopics = week.querySelectorAll('.topic[style="display: block;"]');
            week.style.display = visibleTopics.length > 0 ? 'block' : 'none';
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            applyFilters();
        });
    });

    document.getElementById('searchInput').addEventListener('input', function (e) {
        searchTerm = e.target.value;
        applyFilters();
    });

    document.getElementById('resetProgress').addEventListener('click', async function () {
        if (confirm('Are you sure you want to reset all progress and logs? This cannot be undone.')) {
            try {
                await apiRequest('/api/reset', { method: 'DELETE' });
                Object.keys(progress).forEach(key => delete progress[key]);
                progressLog.splice(0, progressLog.length);
                updateStats();
                renderRoadmap();
                alert('Progress reset successfully!');
            } catch (error) {
                console.error('Failed to reset progress:', error);
                alert('Failed to reset progress. Please try again.');
            }
        }
    });

    document.getElementById('clearProgressLog').addEventListener('click', async function () {
        if (confirm('Are you sure you want to clear the progress log? This will only clear the activity history, not your completed topics.')) {
            try {
                await apiRequest('/api/progress-log', { method: 'DELETE' });
                progressLog.splice(0, progressLog.length);
                currentLogPage = 1; // Reset pagination
                renderProgressLog();
                alert('Progress log cleared successfully!');
            } catch (error) {
                console.error('Failed to clear progress log:', error);
                alert('Failed to clear progress log. Please try again.');
            }
        }
    });

    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    function switchTab(tabName) {
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and button
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Render progress log if switching to that tab
        if (tabName === 'progress-log') {
            renderProgressLog(true); // Reset pagination when switching tabs
        }
    }

    async function removeLogEntry(timestamp) {
        if (confirm('Are you sure you want to remove this log entry?')) {
            try {
                await apiRequest(`/api/progress-log/${encodeURIComponent(timestamp)}`, { 
                    method: 'DELETE' 
                });
                
                // Remove from local array
                const index = progressLog.findIndex(entry => entry.timestamp === timestamp);
                if (index > -1) {
                    progressLog.splice(index, 1);
                }
                
                // Reset pagination if we're on a page that might not have enough entries
                const totalPages = Math.ceil(progressLog.length / logsPerPage);
                if (currentLogPage > totalPages && totalPages > 0) {
                    currentLogPage = totalPages;
                }
                
                renderProgressLog();
            } catch (error) {
                console.error('Failed to remove log entry:', error);
                alert('Failed to remove log entry. Please try again.');
            }
        }
    }

    function renderProgressLog(resetPagination = false) {
        if (resetPagination) {
            currentLogPage = 1;
        }

        const logContainer = document.getElementById('progressLogEntries');
        const statsContainer = document.getElementById('logStats');

        // Calculate enhanced stats
        const totalEntries = progressLog.length;
        const completedEntries = progressLog.filter(entry => entry.action === 'completed').length;
        const uncompletedEntries = progressLog.filter(entry => entry.action === 'uncompleted').length;
        const uniqueDays = [...new Set(progressLog.map(entry => entry.date))].length;
        
        // Calculate streak and recent activity
        const today = new Date().toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'Asia/Karachi'
        });
        const todayEntries = progressLog.filter(entry => entry.date === today).length;

        // Render enhanced stats
        statsContainer.innerHTML = `
                <div class="log-stat">
                    <div class="log-stat-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="log-stat-number">${totalEntries}</div>
                    <div class="log-stat-label">Total Actions</div>
                </div>
                <div class="log-stat">
                    <div class="log-stat-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="log-stat-number">${completedEntries}</div>
                    <div class="log-stat-label">Completed</div>
                </div>
                <div class="log-stat">
                    <div class="log-stat-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="log-stat-number">${uncompletedEntries}</div>
                    <div class="log-stat-label">Uncompleted</div>
                </div>
                <div class="log-stat">
                    <div class="log-stat-icon">
                        <i class="fas fa-calendar-day"></i>
                    </div>
                    <div class="log-stat-number">${uniqueDays}</div>
                    <div class="log-stat-label">Active Days</div>
                </div>
                <div class="log-stat">
                    <div class="log-stat-icon">
                        <i class="fas fa-fire"></i>
                    </div>
                    <div class="log-stat-number">${todayEntries}</div>
                    <div class="log-stat-label">Today's Activity</div>
                </div>
            `;

        if (progressLog.length === 0) {
            logContainer.innerHTML = `
                <div class="no-logs">
                    <div class="no-logs-icon">
                        <i class="fas fa-clipboard-list"></i>
                    </div>
                    <h3>No Progress Logged Yet</h3>
                    <p>Start completing topics to see your learning journey unfold here!</p>
                    <div class="no-logs-tips">
                        <div class="tip">
                            <i class="fas fa-lightbulb"></i>
                            <span>Tip: Check off topics as you complete them to track your progress</span>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        // Sort entries by timestamp (newest first)
        const sortedLog = [...progressLog].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        // Calculate pagination
        const totalLogs = sortedLog.length;
        const totalPages = Math.ceil(totalLogs / logsPerPage);
        const startIndex = 0;
        const endIndex = currentLogPage * logsPerPage;
        const paginatedLogs = sortedLog.slice(startIndex, endIndex);
        
        // Group paginated entries by date
        const groupedEntries = groupLogEntriesByDate(paginatedLogs);
        
        // Render log entries
        const logEntriesHTML = Object.entries(groupedEntries).map(([date, entries]) => `
            <div class="log-date-group">
                <div class="log-date-header">
                    <div class="log-date-info">
                        <i class="fas fa-calendar"></i>
                        <span class="log-date">${formatLogDate(date)}</span>
                        <span class="log-date-count">${entries.length} ${entries.length === 1 ? 'activity' : 'activities'}</span>
                    </div>
                </div>
                <div class="log-entries-list">
                    ${entries.map(entry => renderLogEntry(entry)).join('')}
                </div>
            </div>
        `).join('');

        // Render pagination controls
        const hasMoreLogs = endIndex < totalLogs;
        const paginationHTML = hasMoreLogs ? `
            <div class="log-pagination">
                <div class="pagination-info">
                    <span>Showing ${endIndex} of ${totalLogs} entries</span>
                </div>
                <button class="load-more-btn" onclick="loadMoreLogs()">
                    <i class="fas fa-chevron-down"></i>
                    Load More (${Math.min(logsPerPage, totalLogs - endIndex)} more)
                </button>
            </div>
        ` : (totalLogs > logsPerPage ? `
            <div class="log-pagination">
                <div class="pagination-info">
                    <span>All ${totalLogs} entries loaded</span>
                </div>
                <button class="reset-pagination-btn" onclick="resetLogPagination()">
                    <i class="fas fa-arrow-up"></i>
                    Show Recent Only
                </button>
            </div>
        ` : '');

        logContainer.innerHTML = logEntriesHTML + paginationHTML;
    }

    function loadMoreLogs() {
        currentLogPage++;
        renderProgressLog();
    }

    function resetLogPagination() {
        currentLogPage = 1;
        renderProgressLog();
        // Scroll to top of log container
        document.getElementById('progressLogEntries').scrollIntoView({ behavior: 'smooth' });
    }

    function groupLogEntriesByDate(logs) {
        const sortedLog = [...logs].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        return sortedLog.reduce((groups, entry) => {
            const date = entry.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(entry);
            return groups;
        }, {});
    }

    function formatLogDate(dateStr) {
        const today = new Date().toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'Asia/Karachi'
        });
        
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString('en-PK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'Asia/Karachi'
        });

        if (dateStr === today) return 'Today';
        if (dateStr === yesterday) return 'Yesterday';
        return dateStr;
    }

    function renderLogEntry(entry) {
        const isCompleted = entry.action === 'completed';
        const actionIcon = isCompleted ? 'fa-check-circle' : 'fa-times-circle';
        const actionColor = isCompleted ? 'success' : 'error';
        const actionText = isCompleted ? 'Completed' : 'Marked as incomplete';
        
        // Get topic category/phase for better context
        const topicContext = getTopicContext(entry.topicId);
        
        return `
            <div class="log-entry ${entry.action}">
                <div class="log-entry-icon">
                    <div class="log-icon-wrapper ${actionColor}">
                        <i class="fas ${actionIcon}"></i>
                    </div>
                </div>
                <div class="log-entry-content">
                    <div class="log-entry-header">
                        <div class="log-entry-title">${entry.topicTitle}</div>
                        <div class="log-entry-time">
                            <i class="fas fa-clock"></i>
                            ${entry.time}
                        </div>
                    </div>
                    <div class="log-entry-details">
                        <div class="log-entry-action">
                            <i class="fas ${isCompleted ? 'fa-arrow-up' : 'fa-arrow-down'}"></i>
                            ${actionText}
                        </div>
                        ${topicContext ? `
                            <div class="log-entry-context">
                                <i class="fas fa-folder"></i>
                                ${topicContext}
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="log-entry-actions">
                    <button class="log-delete-btn" onclick="removeLogEntry('${entry.timestamp}')" title="Remove this log entry">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }

    function getTopicContext(topicId) {
        for (const phase of roadmapData.phases) {
            for (const week of phase.weeks) {
                for (const topic of week.topics) {
                    if (topic.id === topicId) {
                        return `${phase.title.split(':')[0]} • ${week.title}`;
                    }
                }
            }
        }
        return null;
    }


    window.togglePhase = togglePhase;
    window.toggleDetails = toggleDetails;
    window.toggleTopic = toggleTopic;
    window.removeLogEntry = removeLogEntry;
    window.toggleResourceAccordion = toggleResourceAccordion;
    window.loadMoreLogs = loadMoreLogs;
    window.resetLogPagination = resetLogPagination;

    // Initialize the application
    async function initializeApp() {
        try {
            await loadProgress();
            renderRoadmap();
            
            if (roadmapData.phases.length > 0) {
                togglePhase(roadmapData.phases[0].id);
            }
        } catch (error) {
            console.error('Failed to initialize app:', error);
            alert('Failed to load the application. Please refresh the page.');
        }
    }

    initializeApp();
});
