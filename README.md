# 🌍 Weather App - Globalized Real-Time Data Application

[![Framework: React.js](https://img.shields.io/badge/Framework-React.js-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Feature: API Integration](https://img.shields.io/badge/Data-API%20Consumption%20(Async)-red?style=flat-square)]()
[![Feature: Internationalization](https://img.shields.io/badge/Global-i18n%20Support-blue?style=flat-square)]()
[![Status: Completed](https://img.shields.io/badge/Status-Completed-success?style=flat-square)]()

**[Place a Screenshot or GIF of the Weather App showing a dynamic background here]**

## ✨ Project Overview

The **Weather App** is a practical and feature-rich Single Page Application (SPA) built with **React.js**. It serves as a comprehensive demonstration of full front-end development, specifically focusing on **integrating with external APIs** and implementing professional features like **Internationalization (i18n)** for multi-language support.

### Key Skills Demonstrated:

* **Asynchronous Data Handling:** Mastery of fetching, parsing, and securely displaying real-time data from a third-party API.
* **Global Readiness (i18n):** Implementation of language localization logic using `i18n.jsx`, proving the ability to build applications ready for global deployment.
* **Dynamic UI/UX:** Changing component styles and background visuals based on fetched weather conditions (e.g., snow, rain, clear sky).
* **State & Effect Management:** Expert use of the **`useState` and `useEffect` Hooks** to manage user input, API calls, loading states, and error handling.

---

## 🛠️ Technical Breakdown and Architecture

The project's complexity is driven by its necessity to interact with the outside world (the API) and provide a rich user experience.

### 1. API and Logic Core

| Component/File | Role in the Application | Technical Skill Demonstrated |
| :--- | :--- | :--- |
| **`App.jsx`** | **Control Center:** Holds the main state (city, weather data, loading status) and contains the function responsible for the API call (`fetchWeatherData`). | **Error Handling** and managing API interaction lifecycle. |
| **`i18n.jsx`** | **Language Setup:** Configures the translation framework, defining available languages and the key/value pairs for all displayed text. | **Accessibility and Global Software Design**. |
| **Presentation Components** | (e.g., Search Bar, Temperature Display) | Receives weather data via **props** and handles **conditional rendering** of icons and temperatures. |

### 2. Implementation Highlights

* **Data Parsing:** The app successfully takes raw JSON data from the API and transforms it into clean, user-friendly temperature, condition, and location displays.
* **Clean Code:** The use of `main.jsx` and separate CSS files (`index.css`, `App.css`) ensures a clean, modular structure typical of professional React development.

---

## 🚀 Getting Started

This project requires **Node.js**, **npm** (or yarn), and a **Weather API Key** to run fully.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/hamzamahmoudaboalhamd/Weather-App.git](https://github.com/hamzamahmoudaboalhamd/Weather-App.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd Weather-App
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Configure API Key:**
    * Create a `.env` file in the root directory.
    * Add your API key (e.g., `VITE_OPEN_WEATHER_API_KEY="YOUR_KEY_HERE"`).
5.  **Run the Application:**
    ```bash
    npm start
    ```
    *The app will open automatically in your browser (usually at `http://localhost:5173`).*

---

## 🤝 Contribution

Feel free to fork the repository and contribute by adding features such as **hourly forecasts**, **location history**, or migrating the state management to **Redux/Zustand**!

---

## 👤 Author

* **[Hamza Mahmoud Aboalhamd](https://github.com/hamzamahmoudaboalhamd)**
*  Linkedin: https://www.linkedin.com/in/hamza-mahmoud-10a395327/
* Portfolio: https://hamza-mahmoud.vercel.app/
