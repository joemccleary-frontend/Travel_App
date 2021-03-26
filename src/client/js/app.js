//import other js files

//import styles?

//export other js files

//APIs
/*Geonames (finds location)
http://api.geonames.org/searchJSON?formatted=true&q=${city}&maxRows=10&lang=es&username=jmccleary&style=full
endpoints=
asciiName
countryCode


Weatherbit (gets current weather data)
https://api.weatherbit.io/v2.0/current?city={CITY}&country={COUNTRY}&key=5921086fa74d4d36a38bc3652d4bfca3

endpoints=
data: [
    city_name: City name.
    country_code: Country abbreviation.
    temp: Temperature (default Celcius).
    app_temp: Apparent/"Feels Like" temperature (default Celcius).
    weather: {
        icon:Weather icon code.
        code:Weather code.
        description: Text weather description.
    }

    ]
https://www.weatherbit.io/api/weather-current
Theres also useful weather icons on here that oculd be good

//Pixabay (finds image for location)

https://pixabay.com/api/docs/

API_KEY=20873600-37a38bfa9e5523a50f7de6b3f
https://pixabay.com/api/?key={API_KEY}={imagename}&image_type=photo&pretty=true
Example:
var API_KEY = '20873600-37a38bfa9e5523a50f7de6b3f';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});


REST coutrnies api
https://restcountries.eu/
https://restcountries.eu/rest/v2/name/(country code/name here)/
Example:
https://restcountries.eu/rest/v2/alpha/col
[{
    "name": "Colombia",
    "capital": "Bogotá",
    "timezones": ["UTC-05:00"],
    "currencies": [{
        "name": "Colombian peso",
    }],
    "languages": [{
        "name": "Spanish",
    },
    "flag": "https://restcountries.eu/data/col.svg",
}]


Flow:

Inputs
let cityInput = document.element.input
http://api.geonames.org/searchJSON?formatted=true&q=${cityInput}&maxRows=10&lang=es&username=jmccleary&style=full
endpoints=
asciiName
countryCode
let city = asciiName
let countryCode = countryCode
let countryName = countrName?

https://api.weatherbit.io/v2.0/current?city={city}&country={countryCode}&key=5921086fa74d4d36a38bc3652d4bfca3
endpoints=
    app_temp: Apparent/"Feels Like" temperature (default Celcius).
    weather: {
        icon:Weather icon code.
        description: Text weather description.
    }

var API_KEY = '20873600-37a38bfa9e5523a50f7de6b3f';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent{city};
let cityImage = endpoint


https://restcountries.eu/rest/v2/name/{countryCode}
Endpoints:
"timezones": ["UTC-05:00"],
"currencies": [{
    "name": "Colombian peso",
}],
"languages": [{
    "name": "Spanish",
},
"flag": "https://restcountries.eu/data/col.svg",

Function updateUI(city, countryName, app_temp, weatherIcon, weatherDesc, cityImage, timezone, currency, language, flag) {
    
}




*/

function createInput() {
    document.getElementById("inputPage").classList.remove("invisible");
    inputPage.scrollIntoView({behavior: "smooth"});

}
function createResults() {
    document.getElementById("trip_deets").classList.remove("invisible2");
    trip_deets.scrollIntoView({behavior: "smooth"});

}