// let slideIndex = 0;

// function startSlider() {
//   showSlides();
// }

// function showSlides() {
//   let slides = document.getElementsByClassName("mySlides");

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;

//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].style.display = "block";

//   setTimeout(showSlides, 3000); // 3 sec
// }
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // 3 sec
}

// Start when page loads
document.addEventListener("DOMContentLoaded", showSlides);