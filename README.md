# 🚀 DevOps Learning Roadmap Tracker

<div align="center">

![DevOps](https://img.shields.io/badge/DevOps-Learning%20Path-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)

**A comprehensive 28-week DevOps learning roadmap with interactive progress tracking**

[🎯 Features](#-features) • [🚀 Quick Start](#-quick-start) • [📚 Roadmap](#-roadmap-overview) • [💻 Usage](#-usage) • [🛠️ Tech Stack](#️-tech-stack)

</div>

---


## ✨ Features

### 🎯 **Interactive Learning Experience**
- **4-Phase Structured Roadmap**: Foundation → CI/CD → Cloud → Advanced Topics
- **28-Week Curriculum**: Carefully planned learning path with time estimates
- **Progress Tracking**: Visual checkboxes and completion statistics
- **Smart Filtering**: Search topics, filter by completion status

### 📊 **Advanced Progress Management**
- **Activity Logging**: Detailed history with timestamps
- **Individual Log Management**: Remove specific log entries
- **Progress Statistics**: Real-time completion metrics
- **Phase Progress Bars**: Visual representation of learning progress

### 🎨 **Modern User Interface**
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Accordion Resources**: Organized by type (YouTube, Documentation)
- **Smooth Animations**: Enhanced user experience
- **Dark/Light Theme**: Easy on the eyes for long study sessions

### 💾 **Persistent Data Storage**
- **File-Based Storage**: No database required
- **Automatic Backups**: Progress saved to JSON files
- **Data Portability**: Easy to backup and restore
- **Multi-Session Support**: Access from different browsers

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devops-roadmap-tracker.git
   cd devops-roadmap-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:5000
   ```

### Development Mode

For development with auto-restart:
```bash
npm run dev
```

## 💻 Usage

### 🎯 **Getting Started**
1. **Expand Phases**: Click on phase headers to view topics
2. **Mark Progress**: Click checkboxes to mark topics as complete
3. **View Details**: Click "Details" to see learning resources
4. **Track Activity**: Switch to "Progress Log" tab to see your history

### 🔍 **Navigation Features**
- **Search**: Find specific topics or technologies
- **Filter**: View only completed or pending topics
- **Resource Organization**: Resources grouped by type (Videos, Docs)
- **Progress Statistics**: Real-time completion tracking

### 📊 **Progress Management**
- **Individual Logs**: Remove specific log entries
- **Reset Progress**: Start fresh if needed
- **Export Data**: Backup your progress files

## 🛠️ Tech Stack

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks, pure JS

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **File System API** - Data persistence

### **Data Storage**
- **JSON Files** - Simple, portable data format
- **RESTful API** - Clean data operations

## 📁 Project Structure

```
devops-roadmap-tracker/
├── 📄 index.html          # Main application interface
├── 📄 main.js             # Frontend JavaScript logic
├── 📄 roadmapData.js      # Learning roadmap content
├── 📄 server.js           # Express.js server
├── 📁 data/               # Progress data storage
│   ├── progress.json      # Topic completion status
│   └── progress-log.json  # Activity history
├── 📄 package.json        # Dependencies and scripts
└── 📄 README.md          # This file
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/progress` | Get progress data |
| `POST` | `/api/progress` | Save progress data |
| `GET` | `/api/progress-log` | Get activity log |
| `POST` | `/api/progress-log` | Save activity log |
| `DELETE` | `/api/progress-log/:timestamp` | Remove log entry |
| `DELETE` | `/api/reset` | Reset all data |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 💡 **Ideas for Contributions**
- Add more learning resources
- Implement new themes
- Add export/import functionality
- Create mobile app version
- Add learning analytics

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **DevOps Community** - For the wealth of learning resources
- **Open Source Contributors** - For inspiration and best practices
- **Learning Platforms** - YouTube, documentation sites, and course providers

## 📞 Support

If you find this project helpful, please consider:
- ⭐ **Starring the repository**
- 🐛 **Reporting bugs** via issues
- 💡 **Suggesting features** via discussions
- 🤝 **Contributing** to the codebase

---

<div align="center">

**Happy Learning! 🚀**

*Built with ❤️ for the DevOps community*

</div>