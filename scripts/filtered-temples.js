// ========================================
// TEMPLE DATA
// ========================================

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // ========================================
    // THREE ADDITIONAL TEMPLES
    // ========================================

    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 17",
        area: 80157,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-58256-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    }
];


// ========================================
// SELECT HTML ELEMENTS
// ========================================

const templeCards = document.querySelector("#temple-cards");
const pageTitle = document.querySelector("main h1");


// ========================================
// DISPLAY TEMPLE CARDS
// ========================================

function displayTemples(templeList) {

    // Clear existing cards
    templeCards.innerHTML = "";

    templeList.forEach((temple) => {

        // Create card elements
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        // Temple name
        name.textContent = temple.templeName;

        // Temple information
        location.innerHTML =
            `<span class="label">Location:</span> ${temple.location}`;

        dedicated.innerHTML =
            `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        area.innerHTML =
            `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        // Temple image
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute(
            "alt",
            `${temple.templeName} Temple`
        );

        // Native lazy loading
        image.setAttribute("loading", "lazy");

        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        // Add everything to the card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        // Add card to page
        templeCards.appendChild(card);
    });
}


// ========================================
// DISPLAY ALL TEMPLES ON PAGE LOAD
// ========================================

displayTemples(temples);


// ========================================
// NAVIGATION
// ========================================

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");


// HOME
// Display all temples

home.addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Home";

    displayTemples(temples);
});


// OLD
// Temples dedicated before 1900

old.addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter((temple) => {

        const year =
            parseInt(temple.dedicated.split(",")[0]);

        return year < 1900;
    });

    displayTemples(oldTemples);
});


// NEW
// Temples dedicated after 2000

newTemples.addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "New Temples";

    const filteredTemples = temples.filter((temple) => {

        const year =
            parseInt(temple.dedicated.split(",")[0]);

        return year > 2000;
    });

    displayTemples(filteredTemples);
});


// LARGE
// Temples larger than 90,000 square feet

large.addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});


// SMALL
// Temples smaller than 10,000 square feet

small.addEventListener("click", (event) => {
    event.preventDefault();

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});


// ========================================
// HAMBURGER MENU
// ========================================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuButton.classList.toggle("open");
});


// ========================================
// FOOTER
// ========================================

// Current copyright year
const currentYear =
    document.querySelector("#currentyear");

currentYear.textContent =
    new Date().getFullYear();


// Last modified date
const lastModified =
    document.querySelector("#lastModified");

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;