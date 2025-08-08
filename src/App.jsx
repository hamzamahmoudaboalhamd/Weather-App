import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// REACT
import { useEffect, useState } from "react";

// MATERIAL UI COMPONENTS
import Container from "@mui/material/Container";
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
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.lon}&appid=dd385f583be6c3f5b7074b6f47e1903c`,
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
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ marginLeft: "350px" }}>
          {/* COUNTRY SELECTOR */}
          <div
            style={{
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            <Select
              value={country.name}
              onChange={(e) => {
                const selected = countries.find(
                  (c) => c.name === e.target.value
                );
                setCountry(selected);
              }}
              style={{ color: "white", background: "#1c345b", borderRadius: 8 }}
            >
              {countries.map((c) => (
                <MenuItem key={c.name} value={c.name}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* CONTENT CONTAINER */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* CARD */}
            <div
              dir={locale == "ar" ? "rtl" : "ltr"}
              style={{
                width: "400px",
                background: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir={locale == "ar" ? "rtl" : "ltr"}
                >
                  <Typography
                    variant="h2"
                    style={{
                      marginRight: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {t(country.name)}
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {dateAndTime}
                  </Typography>
                </div>
                {/* == CITY & TIME == */}

                <hr />

                {/* CONTAINER OF DEGREE + CLOUD ICON */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  {/* DEGREE & DESCRIPTION */}
                  <div>
                    {/* TEMP */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>

                      <img src={temp.icon} />
                    </div>
                    {/*== TEMP ==*/}

                    <Typography variant="h6">{t(temp.description)}</Typography>

                    {/* MIN & MAX */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {" "}
                        {t("Min")}: {temp.min}
                      </h5>
                      <h5 style={{ margin: "0px 5px" }}>|</h5>
                      <h5>
                        {t("Max")}: {temp.max}
                      </h5>
                    </div>
                  </div>
                  {/*== DEGREE & DESCRIPTION ==*/}

                  <CloudIcon
                    style={{
                      fontSize: "200px",
                      color: "white",
                    }}
                  />
                </div>
                {/*= CONTAINER OF DEGREE + CLOUD ICON ==*/}
              </div>
              {/* == CONTENT == */}
            </div>
            {/*== CARD ==*/}

            {/* TRANSLATION CONTAINER */}
            <div
              dir="rtl"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              <Button
                style={{ color: "white" }}
                variant="text"
                onClick={handleClick}
              >
                {locale == "en" ? "Arabic" : "انجليزي"}
              </Button>
            </div>
            {/*== TRANSLATION CONTAINER ==*/}
          </div>
          {/*== CONTENT CONTAINER ==*/}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
