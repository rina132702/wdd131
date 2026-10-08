const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

function toggleMenu() {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", `${isOpen}`);
    menuButton.textContent = isOpen ? "✕" : "☰";
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
}

// Close mobile menu after selecting a link
function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
}

if (menuButton && navigation) {
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

// Update footer year
function updateYear() {
    const yearElement = document.querySelector("#currentyear");

    if (yearElement) {
        yearElement.textContent = `${new Date().getFullYear()}`;
    }
}

// Update last modified date
function updateLastModified() {
    const modifiedElement = document.querySelector("#lastModified");

    if (modifiedElement) {
        modifiedElement.textContent =
            `Last Modified: ${document.lastModified}`;
    }
}

// Track homepage visits using localStorage
function trackVisits() {
    const visitElement = document.querySelector("#visit-count");

    if (!visitElement) {
        return;
    }

    const savedVisits = Number(
        localStorage.getItem("rootedOahuVisits") || 0
    );

    const totalVisits = savedVisits + 1;

    localStorage.setItem("rootedOahuVisits", `${totalVisits}`);

    visitElement.textContent =
        `You have visited this page ${totalVisits} time(s).`;
}

// Initialize website features
function initializeWebsite() {
    updateYear();
    updateLastModified();
    trackVisits();
}

initializeWebsite();