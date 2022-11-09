
var apiKey ='d91f911bcf2c0f925fb6535547a5ddc9';

var searchbutton = document.getElementById("searchbutton")
var searchbox = document.getElementById("search-box")

function getCity () {
    var city = searchbox.value.trim()
    getLatLon(city)
}

function getLatLon (city) {
    var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiURL)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
       // console.log(data);
        var lat = data.coord.lat
        var lon = data.coord.lon
        getForecast(lat,lon)
    })
}

function getForecast (lat,lon) {
    var apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    var todaysTemp = document.getElementById("todays-temp")
    var todaysWind = document.getElementById("todays-wind")
    var todaysHumid = document.getElementById("todays-humid")

    todaysTemp.textContent = `Temperature: ${data.current.temp} F`
    todaysWind.textContent = `Wind: ${data.current.wind_speed} MPH`
    todaysHumid.textContent = `Humidity: ${data.current.humidity}`

















    })
}



searchbutton.addEventListener("click", getCity)