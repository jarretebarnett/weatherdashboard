var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector(".form-control");
var listGroupId = document.querySelector(".list-group");
var cityArr = []; 

function fetchCurrent() {
    var requestCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&units=imperial&appid=4fa0adbba45395f92716109bf82319d1';

    fetch(requestCurrent)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let lat = data.coord.lat
            let lon = data.coord.lon
            console.log(lat, lon);

            $.ajax({
                type: `GET`,
                url: `https://api.openweathermap.org/data/2.5/uvi?lat=` + lat + `&lon=` + lon + `&units=imperial&appid=4fa0adbba45395f92716109bf82319d1`,
                data: JSON.stringify(),
                success: function(data) {
                    console.log('success', data);

                    document.getElementById('uv-index').innerText = 'UV Index: ' + data.value;
                }
            });

            document.getElementById('city').innerText = data.name + ', ' + data.sys.country;
            document.getElementById('status').innerText = data.weather[0].main;
            document.getElementById('degrees').innerText = 'Temp: ' + data.main.temp + ' (°F) | Feels Like: ' + data.main.feels_like + ' (°F)';
            document.getElementById('humidity').innerText = 'Humdity: ' + data.main.humidity + '%';
            document.getElementById('wind-speed').innerText = 'Wind Speed: ' + data.wind.speed + ' MPH';
        })
}

function fiveDayForecast() {
    var requestFiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&units=imperial&appid=4fa0adbba45395f92716109bf82319d1';

    fetch(requestFiveDay)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (i = 0; i < 5; i++) {
                console.log(data.list[i*8]);
                
                document.getElementById('date-00').innerText = data.list[0].dt_txt;
                document.getElementById('status-00').innerText = data.list[0].weather[0].main;
                document.getElementById('degrees-00').innerText = 'Temp: ' + data.list[0].main.temp + ' (°F) | Feels Like: ' + data.list[0].main.feels_like + ' (°F)';
                document.getElementById('humidity-00').innerText = 'Humdity: ' + data.list[0].main.humidity + '%';
                document.getElementById('wind-speed-00').innerText = 'Wind Speed: ' + data.list[0].wind.speed + ' MPH';

                document.getElementById('date-01').innerText = data.list[8].dt_txt;
                document.getElementById('status-01').innerText = data.list[8].weather[0].main;
                document.getElementById('degrees-01').innerText = 'Temp: ' + data.list[8].main.temp + ' (°F) | Feels Like: ' + data.list[8].main.feels_like + ' (°F)';
                document.getElementById('humidity-01').innerText = 'Humdity: ' + data.list[8].main.humidity + '%';
                document.getElementById('wind-speed-01').innerText = 'Wind Speed: ' + data.list[8].wind.speed + ' MPH';

                document.getElementById('date-02').innerText = data.list[16].dt_txt;
                document.getElementById('status-02').innerText = data.list[16].weather[0].main;
                document.getElementById('degrees-02').innerText = 'Temp: ' + data.list[16].main.temp + ' (°F) | Feels Like: ' + data.list[16].main.feels_like + ' (°F)';
                document.getElementById('humidity-02').innerText = 'Humdity: ' + data.list[16].main.humidity + '%';
                document.getElementById('wind-speed-02').innerText = 'Wind Speed: ' + data.list[16].wind.speed + ' MPH';

                document.getElementById('date-03').innerText = data.list[24].dt_txt;
                document.getElementById('status-03').innerText = data.list[24].weather[0].main;
                document.getElementById('degrees-03').innerText = 'Temp: ' + data.list[24].main.temp + ' (°F) | Feels Like: ' + data.list[24].main.feels_like + ' (°F)';
                document.getElementById('humidity-03').innerText = 'Humdity: ' + data.list[24].main.humidity + '%';
                document.getElementById('wind-speed-03').innerText = 'Wind Speed: ' + data.list[24].wind.speed + ' MPH';

                document.getElementById('date-04').innerText = data.list[32].dt_txt;
                document.getElementById('status-04').innerText = data.list[32].weather[0].main;
                document.getElementById('degrees-04').innerText = 'Temp: ' + data.list[32].main.temp + ' (°F) | Feels Like: ' + data.list[32].main.feels_like + ' (°F)';
                document.getElementById('humidity-04').innerText = 'Humdity: ' + data.list[32].main.humidity + '%';
                document.getElementById('wind-speed-04').innerText = 'Wind Speed: ' + data.list[32].wind.speed + ' MPH';
            }
        })
    
}

function developStorage() {
    var saveCity = document.querySelector(".form-control").value;

    cityArr.push(saveCity);

    localStorage.setItem("saveCity", JSON.stringify(cityArr));

    renderStorage();
}

function renderStorage() {
    listGroupId.innerHTML = "";

    for (i = 0; i < cityArr.length; i++) {
        var el = document.createElement("a");
        el.setAttribute("class", "list-group-item");
        el.setAttribute("href", "#");
        // el.setAttribute("onclick", "fetchCurrent(), fiveDayForecast()");
        el.textContent = cityArr[i];
        listGroupId.appendChild(el);
    }
}

searchBtn.addEventListener("click", function() {
    developStorage();
    fetchCurrent();
    fiveDayForecast();
});