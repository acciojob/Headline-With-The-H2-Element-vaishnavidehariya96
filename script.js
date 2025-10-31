// acciojob-subheading.js

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const subheading = document.querySelector("h2");

  // When user clicks on the subheading
  subheading.addEventListener("click", function() {
    alert("Welcome to Acciojob! 🚀");
  });

  // Optional: change color on hover
  subheading.addEventListener("mouseover", function() {
    subheading.style.color = "#ff4d4d";
  });

  subheading.addEventListener("mouseout", function() {
    subheading.style.color = "#007bff";
  });
});