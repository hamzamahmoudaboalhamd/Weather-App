# 🌤️ Modern Weather App

A fully responsive, modern weather application built with React, Vite, and Material UI. This app provides real-time weather updates for various countries, supporting both English and Arabic languages with a beautiful glassmorphism UI.

## ✨ Features

-   **Real-time Weather Data**: Fetches live weather information using the OpenWeatherMap API.
-   **Fully Responsive**: Optimized for all devices - Mobile, Tablet, and Desktop.
-   **Multi-Language Support**: Seamless switching between English (LTR) and Arabic (RTL).
-   **Modern UI/UX**:
    -   Glassmorphism design effect.
    -   Smooth fade-in animations.
    -   "Poppins" font for a clean, modern look.
    -   Dynamic background gradients.
-   **Country Selection**: Easy-to-use dropdown to check weather for different countries.
-   **Detailed Weather Info**: Displays current temperature, min/max temperature, weather description, and icons.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: CSS3 (Flexbox, Grid, Media Queries), [Material UI](https://mui.com/)
-   **API Handling**: [Axios](https://axios-http.com/)
-   **Internationalization**: [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
-   **Date & Time**: [Moment.js](https://momentjs.com/)
-   **Icons**: Material UI Icons

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

-   Node.js installed on your machine.
-   npm (Node Package Manager).

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd "path/to/project"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── App.jsx          # Main application component
├── App.css          # (Deprecated) Old styles
├── index.css        # Main stylesheet with responsive design
├── i18n.jsx         # Internationalization configuration
├── main.jsx         # Entry point
└── ...
```

## 📱 Responsiveness

The app adapts to various screen sizes:
-   **Mobile (< 768px)**: Stacked layout, optimized touch targets.
-   **Tablet (< 1024px)**: Adjusted padding and font sizes.
-   **Desktop**: Full horizontal layout with centered card.

## 🔑 API Key

This project uses a free API key from OpenWeatherMap. If the limit is reached, you may need to replace it with your own key in `App.jsx`:
```javascript
`https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.lon}&appid=YOUR_API_KEY`
```

## 📄 License

This project is for educational purposes.
