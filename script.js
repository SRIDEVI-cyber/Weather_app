function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = "c96ab969ad4c41239a6180416262903";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found!");
                return;
            }

            document.getElementById("city").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("temperature").innerText =
                `Temperature: ${data.current.temp_c} °C`;

            document.getElementById("condition").innerText =
                `Condition: ${data.current.condition.text}`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}