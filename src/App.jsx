import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// REACT
import { useEffect, useState } from "react";

// MATERIAL UI COMPONENTS
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// EXTERNAL LIBRARIES
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";
import "moment/min/locales";
moment.locale("ar");

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});

const countries = [
  { name: "Egypt", lat: 26.8, lon: 30.8 },
  { name: "Saudi Arabia", lat: 24.7, lon: 46.5 },
  { name: "UAE", lat: 24.4, lon: 54.4 },
  { name: "Kuwait", lat: 29.3, lon: 47.5 },
  { name: "Qatar", lat: 25.3, lon: 51.5 },
  { name: "Jordan", lat: 31.9, lon: 35.9 },
  { name: "Morocco", lat: 33.9, lon: -6.9 },
  { name: "Algeria", lat: 36.7, lon: 3.2 },
  { name: "Tunisia", lat: 36.8, lon: 10.2 },
  { name: "Lebanon", lat: 33.9, lon: 35.5 },
  { name: "Turkey", lat: 39.9, lon: 32.8 },
  { name: "France", lat: 48.8, lon: 2.3 },
  { name: "Germany", lat: 52.5, lon: 13.4 },
  { name: "United Kingdom", lat: 51.5, lon: -0.1 },
  { name: "United States", lat: 38.9, lon: -77.0 },
  { name: "India", lat: 28.6, lon: 77.2 },
  { name: "China", lat: 39.9, lon: 116.4 },
  { name: "Japan", lat: 35.7, lon: 139.7 },
];

let cancelAxios = null;

function App() {
  const { t, i18n } = useTranslation();
  const [dateAndTime, setDateAndTime] = useState("");
  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });

  const [locale, setLocale] = useState("ar");
  const [country, setCountry] = useState(countries[0]);

  function handleClick() {
    if (locale == "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
      moment.locale("ar");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
      moment.locale("en");
    }
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
    setDateAndTime(moment().format("MMMM Do YYYY"));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.lon}&appid=dd385f583be6c3f5b7074b6f47e1903c&lang=${locale}`,
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        // handle success
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;

        setTemp({
          number: responseTemp,
          min: min,
          max: max,
          description: description,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    return () => {
      console.log("canceling");
      cancelAxios && cancelAxios();
    };
  }, [country, locale]);

  return (
    <>
      <div className="app-container" dir={locale === "ar" ? "rtl" : "ltr"}>
        <ThemeProvider theme={theme}>
          {/* Header */}
          <header className="header">
            {/* Left: Logo */}
            <div className="header-left">
              <h2 className="logo-text">{t("Weather App")}</h2>
            </div>

            {/* Center: Country Selector */}
            <div className="header-center">
              <Select
                value={country.name}
                onChange={(e) => {
                  const selected = countries.find(
                    (c) => c.name === e.target.value
                  );
                  setCountry(selected);
                }}
                className="country-select"
                MenuProps={{
                  PaperProps: {
                    className: "dropdown-menu"
                  },
                }}
                renderValue={(selected) => t(selected)}
              >
                {countries.map((c) => (
                  <MenuItem key={c.name} value={c.name}>
                    {t(c.name)}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Right: Language Switcher */}
            <div className="header-right">
              <Button
                variant="text"
                className="lang-btn"
                onClick={handleClick}
              >
                {locale === "en" ? "Arabic" : "English"}
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="main-content">
            <div className="weather-card">
              {/* Header: City & Date */}
              <div className="card-header">
                <Typography variant="h2" className="city-name">
                  {t(country.name)}
                </Typography>
                <Typography variant="h6" className="date-time">
                  {dateAndTime}
                </Typography>
              </div>

              <hr className="divider" />

              {/* Body: Temp & Icon */}
              <div className="card-body">
                <div className="temp-section">
                  <div className="current-temp">
                    <Typography variant="h1" className="temp-number">
                      {temp.number}
                    </Typography>
                    {temp.icon && <img src={temp.icon} alt="weather icon" className="weather-icon" />}
                  </div>
                  <Typography variant="h6" className="weather-desc">
                    {t(temp.description)}
                  </Typography>

                  <div className="min-max-container">
                    <span className="min-max-item">
                      {t("Min")}: {temp.min}°
                    </span>
                    <span className="separator">|</span>
                    <span className="min-max-item">
                      {t("Max")}: {temp.max}°
                    </span>
                  </div>
                </div>

                <div className="cloud-icon-container">
                  <CloudIcon className="large-cloud-icon" />
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
