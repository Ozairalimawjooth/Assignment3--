// Dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Event listener to toggle dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Updating the button text
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Switch to Light Mode";
  } else {
    darkModeToggle.textContent = "Switch to Dark Mode";
  }
});


// Scroll-to-Top Functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});