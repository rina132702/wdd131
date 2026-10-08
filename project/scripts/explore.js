/* =========================================
   Rooted in Oahu - Explore Page JavaScript
   ========================================= */

// Array of experience objects
const experiences = [
    {
        id: 1,
        name: "Waimea Valley",
        category: "land",
        description: "Explore a valley known for its natural beauty, cultural history, and native plants.",
        image: "images/waimea-valley.webp"
    },
    {
        id: 2,
        name: "Mālama ʻĀina",
        category: "land",
        description: "Learn about caring for the land and the importance of protecting Hawaii's natural environment.",
        image: "images/malama-aina.webp"
    },
    {
        id: 3,
        name: "Hula & Storytelling",
        category: "culture",
        description: "Discover how hula, music, and storytelling preserve Hawaiian history and traditions.",
        image: "images/hawaiian-hula.webp"
    },
    {
        id: 4,
        name: "The Art of Lei Making",
        category: "culture",
        description: "Learn about the cultural meaning of lei and the traditions behind creating them.",
        image: "images/lei-making.webp"
    },
    {
        id: 5,
        name: "Traditional Hawaiian Food",
        category: "food",
        description: "Explore traditional foods such as poi, laulau, kālua pig, and ʻulu.",
        image: "images/hawaiian-food.webp"
    },
    {
        id: 6,
        name: "Local Food & Community",
        category: "food",
        description: "Discover how local food reflects the diverse cultures and communities of Oahu.",
        image: "images/local-food.webp"
    }
];

// Select HTML elements
const experienceContainer =
    document.querySelector("#experience-container");

const experienceCount =
    document.querySelector("#experience-count");

const favoritesContainer =
    document.querySelector("#favorites-container");

const filterButtons =
    document.querySelectorAll(".filter-btn");

// Retrieve saved favorites from localStorage
let favorites = JSON.parse(
    localStorage.getItem("oahuFavorites") || "[]"
);

// Generate experience cards
function displayExperiences(items) {

    experienceContainer.innerHTML = items.map((experience) => {

        const isFavorite = favorites.includes(experience.id);

        return `
            <article class="explore-card">

                <img
                    src="${experience.image}"
                    alt="${experience.name}"
                    loading="lazy"
                    width="600"
                    height="400">

                <div class="explore-card-content">

                    <h3>${experience.name}</h3>

                    <p>${experience.description}</p>

                    <button
                        type="button"
                        class="favorite-btn"
                        data-id="${experience.id}"
                        aria-pressed="${isFavorite}">

                        ${isFavorite ? "♥ Saved" : "♡ Save Favorite"}

                    </button>

                </div>

            </article>
        `;
    }).join("");

    experienceCount.textContent =
        `Showing ${items.length} experience(s).`;
}

// Filter experiences by category
function filterExperiences(category) {

    const filteredExperiences = category === "all"
        ? experiences
        : experiences.filter((experience) =>
            experience.category === category
        );

    displayExperiences(filteredExperiences);
}

// Save or remove favorites
function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter((favoriteId) =>
            favoriteId !== id
        );

    } else {

        favorites.push(id);
    }

    localStorage.setItem(
        "oahuFavorites",
        JSON.stringify(favorites)
    );

    // Preserve the selected category filter
    const activeFilter =
        document.querySelector(".filter-btn.active");

    const category = activeFilter
        ? activeFilter.dataset.filter
        : "all";

    filterExperiences(category);
    displayFavorites();
}

// Display saved favorites
function displayFavorites() {

    const savedExperiences = experiences.filter((experience) =>
        favorites.includes(experience.id)
    );

    if (savedExperiences.length === 0) {

        favoritesContainer.textContent =
            "You have not saved any experiences yet.";

        return;
    }

    favoritesContainer.innerHTML = `
        <ul class="favorites-list">
            ${savedExperiences.map((experience) =>
                `<li>${experience.name}</li>`
            ).join("")}
        </ul>
    `;
}

// Handle category filter buttons
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((filterButton) => {

            filterButton.classList.remove("active");

            filterButton.setAttribute(
                "aria-pressed",
                "false"
            );
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        filterExperiences(button.dataset.filter);
    });
});

// Handle favorite button clicks
experienceContainer.addEventListener("click", (event) => {

    const favoriteButton =
        event.target.closest(".favorite-btn");

    if (!favoriteButton) {
        return;
    }

    const experienceId =
        Number(favoriteButton.dataset.id);

    toggleFavorite(experienceId);
});

// Visitor interest form
const interestForm =
    document.querySelector("#interest-form");

const formResponse =
    document.querySelector("#form-response");

interestForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const visitorName =
        document.querySelector("#visitor-name").value.trim();

    const visitorInterest =
        document.querySelector("#visitor-interest").value;

    const visitorMessage =
        document.querySelector("#visitor-message").value.trim();

    if (!visitorName || !visitorInterest || !visitorMessage) {

        formResponse.textContent =
            "Please complete all fields before submitting.";

        return;
    }

    const interestLabels = {
        land: "nature and the land",
        culture: "Hawaiian culture",
        food: "local food"
    };

    formResponse.textContent =
        `Mahalo, ${visitorName}! Thank you for sharing your interest in ${interestLabels[visitorInterest]}.`;

    interestForm.reset();
});

// Initialize the Explore page
function initializeExplore() {

    displayExperiences(experiences);
    displayFavorites();
}

initializeExplore();