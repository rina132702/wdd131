const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 78;
const windSpeed = 8;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

const windChill = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °F`;
} else {
    windChill.textContent = "N/A";
}