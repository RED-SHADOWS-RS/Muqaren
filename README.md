# Muqaren

A modern hotel price comparison web application that helps users find the best hotel deals by comparing prices from multiple booking platforms including Agoda and Booking.com.

## 🌟 Features

- **Multi-platform Price Comparison**: Compare hotel prices from Agoda and Booking.com
- **Real-time Search**: Get up-to-date pricing and availability information
- **User-friendly Interface**: Clean and intuitive web interface built with EJS templates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Arabic Support**: Full Arabic language support for Middle Eastern users
- **Error Handling**: Comprehensive error handling with custom error pages

## 🚀 Technology Stack

- **Backend**: Node.js with Express.js framework
- **Template Engine**: EJS for dynamic HTML rendering
- **Web Scraping**: Playwright for Agoda integration and Axios/Cheerio for Booking.com
- **Styling**: Custom CSS with modern design principles
- **Environment Management**: dotenv for configuration

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Muqaren
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:

```env
PORT=3000
```

4. Install Playwright browsers (required for Agoda scraping):

```bash
npx playwright install
```

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```text
src/
├── index.js                 # Main application entry point
├── controllers/             # Request handlers
│   ├── mainController.js   # Home page controller
│   └── searchController.js # Search functionality controller
├── middlewares/             # Custom middleware functions
│   ├── agodaService.js     # Agoda integration middleware
│   └── bookingService.js   # Booking.com integration middleware
├── public/                  # Static assets
│   ├── assets/             # Images and icons
│   ├── javascripts/        # Client-side JavaScript
│   └── stylesheets/        # CSS files
├── routes/                  # Route definitions
│   ├── mainRouter.js       # Main routes
│   └── searchRouter.js     # Search routes
├── services/                # Business logic
│   ├── agodaService.js     # Agoda API integration
│   └── bookingService.js   # Booking.com API integration
└── views/                   # EJS templates
    ├── errorPage.ejs       # Error page template
    ├── mainPage.ejs        # Home page template
    └── searchPage.ejs      # Search results template
```

## 🔍 API Endpoints

### Main Routes

- `GET /` - Home page
- `GET /search` - Search form page
- `POST /search` - Process search request and display results

## 🛡️ Error Handling

The application includes comprehensive error handling:

- **404 Errors**: Custom not found page
- **500 Errors**: Internal server error handling
- **Validation Errors**: Input validation for search parameters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Author

RED SHADOWS | RS

## 🔗 Links

- [عربي README](./README_AR.md) - Arabic version of this README

---

**Note**: This application uses web scraping techniques to gather hotel pricing data. Please ensure you comply with the terms of service of the target websites when using this application.
