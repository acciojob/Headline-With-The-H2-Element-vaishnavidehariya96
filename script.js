// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h2");

  // Show a message in the console when the page loads
  console.log("Subheading loaded successfully!");

  // Add a hover effect with JS (changes color on hover)
  heading.addEventListener("mouseenter", function () {
    heading.style.color = "#28a745"; // green
  });

  heading.addEventListener("mouseleave", function () {
    heading.style.color = "#007bff"; // back to blue
  });
});
