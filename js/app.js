const API_KEY = `fce15224cf966ce9ae4b16aa38b5ffef`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerTest = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerTest('city', temperature.name);
    setInnerTest('temperature', temperature.main.temp);
    setInnerTest('weather', temperature.weather[0].main);
    //console.log(temperature);
    // set the icon
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl);
}