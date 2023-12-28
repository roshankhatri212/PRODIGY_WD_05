function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    // Replace 'YOUR_API_KEY' with the actual API key from OpenWeatherMap
    const apiKey = '57e1f039a3088a27a87b2af5e4a88e7b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '';

    if (data.cod !== '404') {
        const cityName = data.name;
        const country = data.sys.country;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const weatherInfoHTML = `
            <h2>${cityName}, ${country}</h2>
            <p class="temperature">${temperature}°C</p>
            <p>Weather: ${description}</p>
        `;

        weatherInfoDiv.innerHTML = weatherInfoHTML;
    } else {
        weatherInfoDiv.innerHTML = '<p>Location not found. Please try again.</p>';
    }
}
