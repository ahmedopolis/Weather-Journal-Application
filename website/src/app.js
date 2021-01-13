/* Global Variables */
// Load-in env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/**
 *  Api key is accessed via .env file and this key is accessed
 * in server.js to avoid exposure via 'devTools'.
 */
const OpenWeatherMapApiKey = process.env.OpenWeatherMapApiKey;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Comments for app.js below:
// Load-in env variables

// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */
