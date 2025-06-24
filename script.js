const apiKey = "Your API Key"; // Replace with your OpenWeatherMap API key

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      resultDiv.innerHTML = `🌡️ Temperature: ${temp}°C<br>🌥️ Condition: ${condition}`;
    })
    .catch(err => {
      resultDiv.textContent = err.message;
    });
});
