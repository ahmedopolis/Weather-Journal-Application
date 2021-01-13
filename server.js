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

/* Dependencies & Middleware */
const bodyParser = require("body-parser");
const cors = require("cors");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
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
  console.log(server);
  console.log(`Server is running on http://${hostName}: ${port}`);
}

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
