const weatherForm = document.querySelector(".weatherForm");

// const api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chisinau?key=VYCHWKVVKPVYVHGJRNZNW4VE4"

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let city = document.querySelector(".city").value

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=VYCHWKVVKPVYVHGJRNZNW4VE4`, {mode: "cors"})
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        const outputTemp = data.currentConditions.temp;
        celsiusTemp = (outputTemp - 32) * 5/9;
        celsiusTemp = Math.round(celsiusTemp)
        const outputConditions = data.currentConditions.conditions;
        const outputWindGust = data.currentConditions.windgust;
        const outputWindSpeed = data.currentConditions.windspeed;
        const outputPressure = data.currentConditions.pressure;
        const outputCloudCover = data.currentConditions.cloudcover;
        const outputHumidity = data.currentConditions.humidity

        // console.log("temp: ", data.currentConditions.temp)
        // console.log("conditions: ", data.currentConditions.conditions)
        // console.log("wind guts: " ,data.currentConditions.windgust)
        // console.log("windspeed :" ,data.currentConditions.windspeed)
        // console.log("pressure: ", data.currentConditions.pressure)
        // console.log("cloud cover: ", data.currentConditions.cloudcover)


        const output = document.querySelector('.output')
        const weatherApp = document.createElement('div');
    
        weatherApp.innerHTML =
         `
        
        <div class="container">
        <div class="container_header">
            <p class="info">Current Weather</p>
            <p class="current_time"></p>
        </div>
        <div class="card_content">
            <div class="currentWeather">
                <div class="currentWeatherInfo">
                    <p class="weatherIcon">🌧️</p>
                    <p class="temp">${celsiusTemp}°<sub>C</sub></p>
                </div>
                <div class="phrase">${outputConditions}</div>
            </div>
        </div>
        <div class="container_details">
            <div class="windInfo">
                <div>Wind</div>
                <div>${outputWindSpeed}</div>
            </div>
            <div class="windGutsInfo">
                <div>Wind guts</div>
                <div>${outputWindGust}</div>
            </div>
            <div class="humidityInfo">
                <div>Humidity</div>
                <div>${outputHumidity}</div>
            </div>
            <div class="pressureInfo">
                <div>Pressure</div>
                <div>↔ ${outputPressure} mb</div>
            </div>
            <div class="cloudCoverInfo">
                <div>Cloud cover</div>
                <div>${outputCloudCover}%</div>
            </div>
    
        </div>
    </div>
    
    
    `
    output.innerHTML = ""
    output.appendChild(weatherApp)
    
    
    const formDate = document.querySelector('.current_time')
    let currentTime = new Date();
    let formattedData = currentTime.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    })
    formDate.textContent = formattedData // textContent is for div or spans and value for inputs    
    console.log(formattedData);

    })
    .catch(function(error) {
        console.log("an error has executed")
    })
    


})