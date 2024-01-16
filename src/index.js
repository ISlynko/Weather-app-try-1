function displayTemperature(response) {
  let temperatureElement = document.querySelector(".temperature-now");
  let currentTemperature = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#city-current");

  currentCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${currentTemperature}&deg;C`;
}

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");

  let city = cityInput.value;
  let apiKey = "bc4649524ebb028af8032a47bt4c53o0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);

  axios.get(apiUrl).then(displayTemperature);
}

let formCity = document.querySelector("form");
formCity.addEventListener("submit", displayCity);

function formatDate(date) {
  let currentTime = new Date();

  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes({ minimumIntegerDigits: 2 });

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = weekdays[currentTime.getDay()];

  let formattedDate = `${currentDay}, ${currentHour}:${currentMinute},`;

  return formattedDate;
}

let changeDate = document.querySelector("#time-now");

changeDate.innerHTML = formatDate();
