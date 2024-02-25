
// JavaScript code for auto-sliding the images
const container = document.querySelector(".slider-container");
const images1 = document.querySelectorAll(".slider-image1");
const images2 = document.querySelectorAll(".slider-image2");
const images3 = document.querySelectorAll(".slider-image3");
let currentIndex = 0;

function slideImages1() {
  // Hide the current image
  images1[currentIndex].style.display = "none";

  // Update the current index
  currentIndex = (currentIndex + 1) % images1.length;

  // Show the next image
  images1[currentIndex].style.display = "block";
}
function slideImages2() {
  // Hide the current image
  images2[currentIndex].style.display = "none";

  // Update the current index
  currentIndex = (currentIndex + 1) % images2.length;

  // Show the next image
  images2[currentIndex].style.display = "block";
}
function slideImages3() {
  // Hide the current image
  images3[currentIndex].style.display = "none";

  // Update the current index
  currentIndex = (currentIndex + 1) % images3.length;

  // Show the next image
  images3[currentIndex].style.display = "block";
}

// Set an interval to call slideImages() every 3 seconds
setInterval(slideImages1, 3000);
setInterval(slideImages2, 3000);
setInterval(slideImages3, 3000);
