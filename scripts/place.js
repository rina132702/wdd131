// Display the current year in the footer
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// Display the date the document was last modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Static weather values
const temperature = 78;
const windSpeed = 8;

// Calculate wind chill using Fahrenheit and miles per hour
function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

// Display the wind chill
const windChill = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °F`;
} else {
    windChill.textContent = "N/A";
}
