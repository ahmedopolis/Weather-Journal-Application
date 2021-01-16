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
  let dataURL = "http://localhost:8000/projectData";
  async function processUserData() {
    await postData(dataURL, data).then(async () => {
      await updateUserInterface(dataURL);
    });
  }
  processUserData();
}

/* Function to POST data */
async function postData(url = "", data = {}) {
  const req = await fetch(url, {
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
  try {
    const newRequest = req;
    return newRequest;
  } catch (error) {
    console.error("Error:", error);
  }
}

/* Function to GET Project Data */
async function getData(url = "") {
  const res = await fetch(url);
  try {
    const weatherData = await res.json();
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
  }
}

/* Function fetch weather data and to update UI respectively */
async function updateUserInterface(dataURL) {
  const dataDiv = document.querySelector("#date");
  const dataTemp = document.querySelector("#temp");
  const dataHumidity = document.querySelector("#humidity");
  const dataZipCode = document.querySelector("#zipCode");
  const dataDescription = document.querySelector("#description");
  const dataContent = document.querySelector("#content");
  let getUserData = await getData(dataURL).then(async (data) => {
    dataDiv.innerText = await data.date;
    dataTemp.innerText = await data.temp;
    dataHumidity.innerText = await data.humidity;
    dataZipCode.innerText = await data.zipCode;
    dataDescription.innerText = await data.description;
    dataContent.innerText = await data.content;
  });
  return getUserData;
}
