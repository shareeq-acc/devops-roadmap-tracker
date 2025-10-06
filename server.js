const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// File paths for data storage
const PROGRESS_FILE = path.join(__dirname, 'data', 'progress.json');
const LOG_FILE = path.join(__dirname, 'data', 'progress-log.json');

// Ensure data directory exists
async function ensureDataDirectory() {
    try {
        await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
    } catch (error) {
        console.error('Error creating data directory:', error);
    }
}

// Helper function to read JSON file
async function readJsonFile(filePath, defaultValue = {}) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, return default value
            return defaultValue;
        }
        throw error;
    }
}

// Helper function to write JSON file
async function writeJsonFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing file:', error);
        throw error;
    }
}

// API Routes

// Get progress data
app.get('/api/progress', async (req, res) => {
    try {
        const progress = await readJsonFile(PROGRESS_FILE, {});
        res.json(progress);
    } catch (error) {
        console.error('Error reading progress:', error);
        res.status(500).json({ error: 'Failed to read progress data' });
    }
});

// Save progress data
app.post('/api/progress', async (req, res) => {
    try {
        await writeJsonFile(PROGRESS_FILE, req.body);
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving progress:', error);
        res.status(500).json({ error: 'Failed to save progress data' });
    }
});

// Get progress log
app.get('/api/progress-log', async (req, res) => {
    try {
        const log = await readJsonFile(LOG_FILE, []);
        res.json(log);
    } catch (error) {
        console.error('Error reading progress log:', error);
        res.status(500).json({ error: 'Failed to read progress log' });
    }
});

// Save progress log
app.post('/api/progress-log', async (req, res) => {
    try {
        await writeJsonFile(LOG_FILE, req.body);
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving progress log:', error);
        res.status(500).json({ error: 'Failed to save progress log' });
    }
});

// Reset all data
app.delete('/api/reset', async (req, res) => {
    try {
        await writeJsonFile(PROGRESS_FILE, {});
        await writeJsonFile(LOG_FILE, []);
        res.json({ success: true });
    } catch (error) {
        console.error('Error resetting data:', error);
        res.status(500).json({ error: 'Failed to reset data' });
    }
});

// Clear progress log only
app.delete('/api/progress-log', async (req, res) => {
    try {
        await writeJsonFile(LOG_FILE, []);
        res.json({ success: true });
    } catch (error) {
        console.error('Error clearing progress log:', error);
        res.status(500).json({ error: 'Failed to clear progress log' });
    }
});

// Remove individual log entry
app.delete('/api/progress-log/:timestamp', async (req, res) => {
    try {
        const { timestamp } = req.params;
        const log = await readJsonFile(LOG_FILE, []);
        
        // Filter out the log entry with the matching timestamp
        const updatedLog = log.filter(entry => entry.timestamp !== timestamp);
        
        if (log.length === updatedLog.length) {
            return res.status(404).json({ error: 'Log entry not found' });
        }
        
        await writeJsonFile(LOG_FILE, updatedLog);
        res.json({ success: true });
    } catch (error) {
        console.error('Error removing log entry:', error);
        res.status(500).json({ error: 'Failed to remove log entry' });
    }
});

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <a href="/">Go back to DevOps Roadmap Tracker</a>
    `);
});

// Initialize server
async function startServer() {
    await ensureDataDirectory();

    app.listen(PORT, () => {
        console.log(`DevOps Roadmap Tracker is running on http://localhost:${PORT}`);
        console.log(`Access your learning tracker at: http://localhost:${PORT}`);
        console.log(`Data will be stored in: ${path.join(__dirname, 'data')}`);
    });
}

// Start the server
startServer().catch(console.error);

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server gracefully...');
    process.exit(0);
});