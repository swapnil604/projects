const weatherPart = document.querySelector(".weather-part");
const headerStyle = document.querySelector("header i");
const wrapper = document.querySelector(".wrapper");
const inputPart = wrapper.querySelector(".input-part");
const infoTxt = inputPart.querySelector(".info-txt");
const inputField = inputPart.querySelector("input");
const locationBtn = inputPart.querySelector("button");
const apiKey = "a7be45fba0ae1e835687381a561775e1";
const icons = document.querySelector(".weather-part img");
const goBack = wrapper.querySelector("header i");

let api;

inputPart.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && inputField.value != "") {
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Geolocation is not supported in your browser");
    }
});

function onSuccess(position) {
    // console.log(position)
    const { latitude, longitude } = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
}

function onError(error) {
    infoTxt.innerHTML = "User denied geolocation...";
    infoTxt.classList.add("error");
    // wrapper.style.height = "290px";
}

function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData();
}

function fetchData() {
    infoTxt.innerHTML = "getting details...";
    infoTxt.classList.add("pending");
    // wrapper.style.height = "290px";

    fetch(api)
        .then((response) => response.json())
        .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
    if (info.cod == "404") {
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerHTML = `${inputField.value} is not valid city name.`;
    } else {
        const city = info.name;
        const country = info.sys.country;
        const { description, id } = info.weather[0];
        const { feels_like, humidity, temp } = info.main;

        if (id == 800) {
            icons.src = "icons/clear.svg";
        } else if (id >= 200 && id <= 232) {
            icons.src = "icons/storm.svg";
        } else if (id >= 600 && id <= 622) {
            icons.src = "icons/snow.svg";
        } else if (id >= 701 && id <= 781) {
            icons.src = "icons/haze.svg";
        } else if (id >= 801 && id <= 804) {
            icons.src = "icons/cloud.svg";
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            icons.src = "icons/rain.svg";
        }

        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(
            ".location span"
        ).innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText =
            Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;

        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
        // console.log(info);
        // wrapper.style.height = "250px";
    }
}

goBack.addEventListener("click", () => {
    wrapper.classList.remove("active");
})