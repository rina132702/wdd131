const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    if (isOpen) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});