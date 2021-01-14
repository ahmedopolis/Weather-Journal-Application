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
const postData = async (url = "", data = {}) => {
  const request = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
        contentFeelings: data.contentFeelings,
        description: data.description,
        humidity: data.humidity,
        name = data.name,
        temp = data.temp
    }),
  })
  return await response.json();
};
/* Function to GET Project Data */
