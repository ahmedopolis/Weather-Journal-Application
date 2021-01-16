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

// Setup server
const port = 8000;
const hostName = "localhost";

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening() {
  //console.log(server);
  console.log(`Server is running on http://${hostName}: ${port}`);
}

//Example zipcode : 90044
function concatAPIString(zipCode) {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  const apiString = `&appid=${OpenWeatherMapApiKey}`;
  const fullApiString = `${baseURL}${zipCode},us${apiString}`;
  return fullApiString;
}

// Initialize all route with a callback function
app.get("/weatherData", sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
  res.send(projectData);
}

// Post Route
app.post("/weatherData", addWeatherData);

function addWeatherData(req, res) {
  console.log(req.body);
  const apiCall = concatAPIString(req.body.zipCode);
  console.log(apiCall);
  let combinedPostData = {};
  fetchWeatherData(apiCall)
    .then((data) => {
      console.log("Success:", data);
      const [{ description }] = data.weather;
      console.log(description);
      const { temp, humidity } = data.main;
      //Temperature is in Kelvin
      console.log(temp);
      console.log(humidity);
      const name = data.name;
      console.log(name);
      combinedPostData = {
        date: req.body.date,
        zipCode: req.body.zipCode,
        content: req.body.content,
        description: description,
        temp: temp,
        humidity: humidity,
        name: name,
      };
      console.log(combinedPostData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  projectData = combinedPostData;
  res.send(combinedPostData);
}

async function fetchWeatherData(url) {
  const response = await fetch(url);
  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

/*
function postWeatherData(zipCode) {
  const apiCall = concatAPIString(zipCode);
  fetchWeatherData(apiCall, {})
    .then((data) => {
      console.log("Success:", data);
      const [{ description }] = data.weather;
      // console.log(description);
      const { temp, humidity } = data.main;
      //Temperature is in Kelvin
      // console.log(temp);
      //console.log(humidity);
      const name = data.name;
      //console.log(name);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function fetchWeatherData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

postWeatherData(90044);
*/
/*
const apiCall = concatAPIString(90044);

fetch(apiCall)
  .then((response) => response.json())
  .then((data) => {
    const [{ description }] = data.weather;
    //console.log(description);
    const { temp, humidity } = data.main;
    // Temperature is in Kelvin
    //console.log(temp);
    //console.log(humidity);
    const name = data.name;
    //console.log(name);
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  */

/*
app.post("/weather", (req, res) => {
  const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  const zipCode = req.body.zip;
  const APIString = `&appid=${OpenWeatherMapApiKey}`;
  const API_CALL = `${baseURL}${zipCode},us${APIString}`;
  fetch(API_CALL)
    .then((response) => response.json())
    .then((data) => {
      const [{ description }] = data.weather;
      const { temp, humidity } = data.main;
      const name = data.name;
      
    });
});
// Initialize all route with a callback function
app.get("/all", sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
  res.send(projectData);
}

// Post Route
app.post("/weather", addWeatherData);

function addWeatherData(req, res) {
  console.log(req.body);
  const data = [];
  let newProjectDataEntry = {
    date: req.body.date,
    temperature: req.body.temp,
    contentFeelings: req.body.content,
  };
  projectData = newProjectDataEntry;
  data.push(projectData);
}
*/
