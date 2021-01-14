/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = 1 + d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element
document.querySelector("#generate").addEventListener("click", runAction);

/* Function called by event listener */
function runAction(elem) {
  elem.preventDefault();
  const newZIPCode = document.querySelector("#zip").value;
  const contentFeelings = document.querySelector("#feelings").value;
}

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */
