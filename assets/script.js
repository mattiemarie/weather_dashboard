
var apiKey ='d91f911bcf2c0f925fb6535547a5ddc9';

var searchbutton = document.getElementById("searchbutton")
var searchbox = document.getElementById("search-box")     

function getCity () {
    var city = searchbox.value.trim()
    getLatLon(city)
    $("#cityName").append(city);
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

    //Date for Today
    var today = moment();
    $("#todays-date").text(today.format('L'));
    
    //Variables for Today's Forecast
    var todaysTemp = document.getElementById("todays-temp")
    var todaysWind = document.getElementById("todays-wind")
    var todaysHumid = document.getElementById("todays-humid")

    //Call for Today's Forecast
    todaysTemp.textContent = `Temperature: ${data.current.temp} F`
    todaysWind.textContent = `Wind: ${data.current.wind_speed} MPH`
    todaysHumid.textContent = `Humidity: ${data.current.humidity}`
    
    //Date for Day 1
    var dayone = moment().add(1, 'days');
    $("#dayone-date").text(dayone.format('L'));

    //Variables for Day 1 Forecast
    var dayoneTemp = document.getElementById("dayone-temp")
    var dayoneWind = document.getElementById("dayone-wind")
    var dayoneHumid = document.getElementById("dayone-humid")
    
    //Call for Day 1 Forecast
    dayoneTemp.textContent = `Temperature: ${data.daily[1].temp.day} F`
    dayoneWind.textContent = `Wind: ${data.daily[1].wind_speed} MPH`
    dayoneHumid.textContent = `Humidity: ${data.daily[1].humidity}`

    //Date for Day 2
    var daytwo = moment().add(2, 'days');
    $("#daytwo-date").text(daytwo.format('L'));

    //Variables for Day 2 Forecast
    var daytwoTemp = document.getElementById("daytwo-temp")
    var daytwoWind = document.getElementById("daytwo-wind")
    var daytwoHumid = document.getElementById("daytwo-humid")

    //Call for Day 2 Forecast
    daytwoTemp.textContent = `Temperature: ${data.daily[2].temp.day} F`
    daytwoWind.textContent = `Wind: ${data.daily[2].wind_speed} MPH`
    daytwoHumid.textContent = `Humidity: ${data.daily[2].humidity}`

    //Date for Day 3
    var daythree = moment().add(3, 'days');
    $("#daythree-date").text(daythree.format('L'));

    //Variables for Day 3 Forecast
    var daythreeTemp = document.getElementById("daythree-temp")
    var daythreeWind = document.getElementById("daythree-wind")
    var daythreeHumid = document.getElementById("dayone-humid")

    //Call for Day 3 Forecast
    daythreeTemp.textContent = `Temperature: ${data.daily[3].temp.day} F`
    daythreeWind.textContent = `Wind: ${data.daily[3].wind_speed} MPH`
    daythreeHumid.textContent = `Humidity: ${data.daily[3].humidity}`

    //Date for Day 4
    var dayfour = moment().add(4, 'days');
    $("#dayfour-date").text(dayfour.format('L'));

    //Variables for Day 4 Forecast
    var dayfourTemp = document.getElementById("dayfour-temp")
    var dayfourWind = document.getElementById("dayfour-wind")
    var dayfourHumid = document.getElementById("dayfour-humid")

    //Call for Day 4 Forecast
    dayfourTemp.textContent = `Temperature: ${data.daily[4].temp.day} F`
    dayfourWind.textContent = `Wind: ${data.daily[4].wind_speed} MPH`
    dayfourHumid.textContent = `Humidity: ${data.daily[4].humidity}`

    //Date for Day 5
    var dayfive = moment().add(5, 'days');
    $("#dayfive-date").text(dayfive.format('L'));

    //Variables for Day 5 Forecast
    var dayfiveTemp = document.getElementById("dayfive-temp")
    var dayfiveWind = document.getElementById("dayfive-wind")
    var dayfiveHumid = document.getElementById("dayfive-humid")

    //Call for Day 5 Forecast
    dayfiveTemp.textContent = `Temperature: ${data.daily[5].temp.day} F`
    dayfiveWind.textContent = `Wind: ${data.daily[5].wind_speed} MPH`
    dayfiveHumid.textContent = `Humidity: ${data.daily[5].humidity}`

    })
}


searchbutton.addEventListener("click", getCity)