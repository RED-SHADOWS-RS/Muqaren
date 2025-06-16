# 🏨 Muqaren | مقارن

<p align="center">

**Your Ultimate Hotel Price Comparison Platform**

*Find the best hotel deals by comparing prices across multiple booking platforms*

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5.1+-red.svg)](https://expressjs.com/)

</p>

---

## 🎯 About Muqaren

**Muqaren** (مقارن) is a sophisticated hotel price comparison web application designed to help travelers discover the best accommodation deals. By aggregating data from leading booking platforms like **Agoda** and **Booking.com**, Muqaren empowers users to make informed decisions and save money on their hotel bookings.

### 🌍 Why Muqaren?

- **Save Time**: No more browsing multiple websites individually
- **Save Money**: Compare prices instantly to find the best deals
- **Local Focus**: Built with Arabic language support for Middle Eastern travelers
- **Real-time Data**: Get current pricing and availability information

## ✨ Key Features

- 🔍 **Smart Price Comparison**: Seamlessly compare hotel prices from **Agoda** and **Booking.com**
- ⚡ **Real-time Search**: Get up-to-date pricing and availability information instantly
- 🎨 **Intuitive Interface**: Clean, modern web interface built with EJS templates
- 📱 **Responsive Design**: Perfect experience on desktop, tablet, and mobile devices
- 🌐 **Arabic Language Support**: Full localization for Middle Eastern users
- 🛡️ **Robust Error Handling**: Comprehensive error management with custom error pages
- 🚀 **Fast Performance**: Optimized for quick searches and results

## 🏗️ Architecture Overview

```text
📁 src/
├── 🚀 index.js                 # Application entry point & server configuration
├── 🎛️  controllers/             # Request handlers & business logic
│   ├── mainController.js       # Homepage & navigation controller
│   └── searchController.js     # Search functionality & results controller
├── ⚙️  middlewares/             # Custom middleware functions
│   ├── agodaService.js         # Agoda integration middleware
│   └── bookingService.js       # Booking.com integration middleware
├── 🌐 public/                   # Static assets & frontend resources
│   ├── 🖼️  assets/              # Images, icons & media files
│   ├── ⚡ javascripts/          # Client-side JavaScript
│   └── 🎨 stylesheets/          # CSS styling & themes
├── 🛤️  routes/                  # API route definitions
│   ├── mainRouter.js           # Main application routes
│   └── searchRouter.js         # Search-specific routes
├── 🔧 services/                 # Core business logic & integrations
│   ├── agodaService.js         # Agoda API integration & data processing
│   └── bookingService.js       # Booking.com API integration & data processing
└── 📄 views/                    # EJS templates & UI components
    ├── errorPage.ejs           # Error page template
    ├── mainPage.ejs            # Homepage template
    └── searchPage.ejs          # Search results template
```

## �️ API Reference

### 🌐 Available Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/` | **Homepage** - Main landing page | HTML page |
| `GET` | `/search` | **Search Form** - Display search interface | HTML form |
| `POST` | `/search` | **Process Search** - Execute price comparison | Search results |

### 📊 Error Responses

| Status Code | Error Type | Description |
|-------------|------------|-------------|
| `404` | **Page Not Found** | Custom error page for missing routes |
| `500` | **Server Error** | Internal server error with detailed logging |
| `400` | **Validation Error** | Input validation failures for search parameters |

## � Security & Error Handling

The application implements robust error handling and security measures:

- ✅ **Input Validation**: Comprehensive validation for all search parameters
- 🛡️ **Error Boundaries**: Graceful error handling with user-friendly error pages  
- 📝 **Detailed Logging**: Complete error logging for debugging and monitoring
- 🔒 **Secure Headers**: Security middleware for protection against common vulnerabilities

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🚀 Quick Start for Contributors

1. **Fork** the repository to your GitHub account
2. **Clone** your fork locally: `git clone <your-fork-url>`
3. **Create** a feature branch: `git checkout -b feature/amazing-new-feature`
4. **Make** your changes and commit: `git commit -m 'Add amazing new feature'`
5. **Push** to your branch: `git push origin feature/amazing-new-feature`
6. **Open** a Pull Request with a detailed description

### � Contribution Ideas

- Add support for more booking platforms
- Improve the user interface and user experience
- Add new language localizations
- Enhance error handling and logging
- Write comprehensive tests

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍� Author & Maintainer

**🔥 RED SHADOWS | RS**

- Creator and lead developer of Muqaren
- Passionate about travel technology and price comparison solutions

## 🌐 Documentation

| Language | Link | Status |
|----------|------|--------|
| 🇺🇸 **English** | [README.md](./README.md) | ✅ Current |
| 🇸🇦 **العربية** | [README_AR.md](./README_AR.md) | ✅ Available |

---

<p align="center">

### 🚨 Important Notice

**This application uses web scraping techniques to gather hotel pricing data.**

Please ensure you comply with the **terms of service** of the target websites (Agoda, Booking.com) when using this application. The developers are not responsible for any misuse or violations of third-party terms of service.

**⭐ If you find this project helpful, please consider giving it a star!**

</p>
