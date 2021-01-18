// Load-in env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/**
 *  Api key is accessed via .env file and this key is accessed
 * in server.js to avoid exposure via 'devTools'.
 */
const OpenWeatherMapApiKey = process.env.OpenWeatherMapApiKey;

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");

// Module to enable request via hyper text transfer protocol
const http = require("http");

// HTTP request logger middleware for node.js
const morgan = require("morgan");

// Type1: In-memory only datastore (no need to load the database)
var dataStore = require("nedb");

// Start up an instance of app
const app = express();

// External module to use fetch in Node js
const fetch = require("node-fetch");

/* Dependencies & Middleware */
const bodyParser = require("body-parser");
const cors = require("cors");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance for proxy server
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Create new database object and load database
const database = new dataStore("weatherdatabase.db");
database.loadDatabase();

// Setup server
const port = 8000;
const hostName = "localhost";
const localServer = http.createServer(app);

// Spin up the server
localServer.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`Server is running on http://${hostName}: ${port}`);
}

// Function to concatenate api call requirements for the api string
function concatAPIString(zipCode) {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  const apiString = `&appid=${OpenWeatherMapApiKey}`;
  const fullApiString = `${baseURL}${zipCode},us${apiString}`;
  return fullApiString;
}

// Post Route
app.post("/projectData", addWeatherData);

// Combine data from user inputs and resulting api response
function addWeatherData(req, res) {
  const apiCall = concatAPIString(req.body.zipCode);
  fetchWeatherData(apiCall)
    .then((data) => {
      console.log(data);
      const [{ description, icon }] = data.weather;
      const { temp, humidity } = data.main;
      const name = data.name;
      const tempFahrenheit = convertKelvintoFahrenheit(temp).toFixed(2);
      projectData = {
        STATUS: "Success",
        date: req.body.date,
        zipCode: req.body.zipCode,
        content: req.body.content,
        description: description,
        temp: tempFahrenheit,
        humidity: humidity,
        name: name,
        icon: icon,
      };
      database.insert(projectData);
    })
    .then((newProjectData) => {
      res.status(200).send(newProjectData);
    });
}

// Convert temperature received in kelvin to Fahrenheit
function convertKelvintoFahrenheit(temp) {
  return (temp * 9) / 5 - 459.67;
}

// Function to fetch api response
async function fetchWeatherData(url) {
  const response = await fetch(url);
  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Initialize all route with a callback function
app.get("/projectData", sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
  res.status(200).send(projectData);
}
