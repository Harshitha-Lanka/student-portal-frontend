let currentSlide = 0;

const slides = document.querySelectorAll(".carousel-item");
const track = document.getElementById("carouselTrack");
const dots = document.querySelectorAll(".dot");

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // Update active class on dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function moveSlide(step) {
  currentSlide += step;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlidePosition();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidePosition();
}

// Responsive fix: recalculate on window resize
window.addEventListener("resize", updateSlidePosition);

// Init on load
window.onload = updateSlidePosition;
