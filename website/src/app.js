// Event listener to add function to existing HTML DOM element
document.querySelector("#generate").addEventListener("click", runAction);

/* Function called by event listener */
function runAction(elem) {
  elem.preventDefault();
  let data = {};
  let d = new Date();
  let newDate = 1 + d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
  const newZipCode = document.querySelector("#zip").value;
  const newContentFeelings = document.querySelector("#feelings").value;
  data = {
    date: newDate,
    zipCode: newZipCode,
    content: newContentFeelings,
  };
  postData("http://localhost:8000/weatherData", data);
}

/* Function to POST data */
const postData = async (url = "", data = {}) => {
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
    body: JSON.stringify({
      date: data.date,
      zipCode: data.zipCode,
      content: data.content,
    }),
  });
  return await response.json();
};

/* Function to GET Project Data */
const getData = async function (url = "") {
  let res = await fetch(url);
  try {
    let weatherData = res.json();
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
  }
};
