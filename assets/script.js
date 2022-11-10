
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
        //console.log(data);
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
    
    //Variables for Today's Forecast
    var todaysTemp = document.getElementById("todays-temp")
    var todaysWind = document.getElementById("todays-wind")
    var todaysHumid = document.getElementById("todays-humid")

    //Call for Today's Forecast
    todaysTemp.textContent = `Temperature: ${data.current.temp} F`
    todaysWind.textContent = `Wind: ${data.current.wind_speed} MPH`
    todaysHumid.textContent = `Humidity: ${data.current.humidity}`

    var dayoneTemp = document.getElementById("dayone-temp")
    var dayoneWind = document.getElementById("dayone-wind")
    var dayoneHumid = document.getElementById("dayone-humid")
    
    dayoneTemp.textContent = `Temperature: ${} F`
    dayoneWind.textContent = `Wind: ${} MPH`
    dayoneHumid.textContent = `Humidity: ${}`


    var daytwoTemp = document.getElementById("daytwo-temp")
    var daytwoWind = document.getElementById("daytwo-wind")
    var daytwoHumid = document.getElementById("daytwo-humid")

    daytwoTemp.textContent = `Temperature: ${} F`
    daytwoWind.textContent = `Wind: ${} MPH`
    daytwoHumid.textContent = `Humidity: ${}`


    var daythreeTemp = document.getElementById("daythree-temp")
    var daythreeWind = document.getElementById("daythree-wind")
    var daythreeHumid = document.getElementById("dayone-humid")

    daythreeTemp.textContent = `Temperature: ${} F`
    daythreeWind.textContent = `Wind: ${} MPH`
    daythreeHumid.textContent = `Humidity: ${}`


    var dayfourTemp = document.getElementById("dayfour-temp")
    var dayfourWind = document.getElementById("dayfour-wind")
    var dayfourHumid = document.getElementById("dayfour-humid")

    dayfourTemp.textContent = `Temperature: ${} F`
    dayfourWind.textContent = `Wind: ${} MPH`
    dayfourHumid.textContent = `Humidity: ${}`


    var dayfiveTemp = document.getElementById("dayfive-temp")
    var dayfiveWind = document.getElementById("dayfive-wind")
    var dayfiveHumid = document.getElementById("dayfive-humid")

    dayfiveTemp.textContent = `Temperature: ${} F`
    dayfiveWind.textContent = `Wind: ${} MPH`
    dayfiveHumid.textContent = `Humidity: ${}`





    })
}



searchbutton.addEventListener("click", getCity)