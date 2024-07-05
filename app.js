const hamBtn = document.getElementById("ham-btn");
const dropdown = document.getElementById("dropdown");

hamBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

const carouselItems = document.querySelectorAll("[data-carousel-item]");
const indicators = document.querySelectorAll("[data-carousel-slide-to]");
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("hidden", i !== index);
  });
  indicators.forEach((indicator, i) => {
    indicator.setAttribute("aria-current", i === index);
  });
  currentIndex = index;
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

prevButton.addEventListener("click", () => {
  const nextIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(nextIndex);
});

nextButton.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(nextIndex);
});

showSlide(currentIndex);
