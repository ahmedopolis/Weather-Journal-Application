/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Comments for app.js below:

// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

function postGet() {
  postData("/animal", { fav: "lion" }).then(function (data) {
    retrieveData("/all");
  });
}

postGet();
