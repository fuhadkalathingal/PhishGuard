// Get the dark mode toggle button and icon
const darkModeToggle = document.getElementById("dark-mode-toggle");
// const darkModeIcon = document.getElementById("dark-mode-icon");

// Get the root element of the page
const root = document.documentElement;

const body = document.body;

// Initial dark mode status
let isDarkMode = false;

// Dark mode toggle logic
darkModeToggle.addEventListener("click", () => {
    if (isDarkMode) {
        // Switch to light mode
        body.style.setProperty("background-color", "#fff"); // Set background color
        // darkModeIcon.src = "ass.png"; // Switch icon
    } else {
        // Switch to dark mode
        body.style.setProperty("background-color", "#333"); // Set background color
        // darkModeIcon.src = "sun-icon.png"; // Switch icon
    }
    isDarkMode = !isDarkMode;
});

// Get the login modal element
let loginModal = document.getElementById("loginModal");

// Function to display the login modal
function showLoginModal() {
    loginModal.style.display = "flex";
}

// Function to hide the login modal
function hideLoginModal() {
    loginModal.style.display = "none";
}

// Add click event listeners to buttons
let likeBtn = document.querySelectorAll(".like-btn");
let favoriteBtn = document.querySelectorAll(".favorite-btn");
let shareBtn = document.querySelectorAll(".share-btn");
let commentBtn = document.querySelectorAll(".comment-btn");
let detailsBtn = document.querySelectorAll(".details-btn");

// Add event listeners to the filtered button lists
likeBtn.forEach(element => element.onclick = showLoginModal)
favoriteBtn.forEach(element => element.onclick = showLoginModal)
shareBtn.forEach(element => element.onclick = showLoginModal)
commentBtn.forEach(element => element.onclick = showLoginModal)
detailsBtn.forEach(element => element.onclick = showLoginModal)
