const hamBtn = document.getElementById("ham-btn");
const dropdown = document.getElementById("dropdown");

hamBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Carrusel Fotos JavaScript

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
    if (i === index) {
      indicator.setAttribute("aria-current", "true");
      indicator.classList.add("bg-green-500");
      indicator.classList.remove("bg-white/50");
    } else {
      indicator.setAttribute("aria-current", "false");
      indicator.classList.remove("bg-green-500");
      indicator.classList.add("bg-white/50");
    }
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

// Carrusel de Fotos termina

// Carrusel de testimonios empieza

const carouselTestimoniosItems = document.querySelectorAll(
  "[data-testimonio-item]"
);
const testimoniosIndicators = document.querySelectorAll(
  "[data-testimonio-carousel-slide-to]"
);
const testimoniosPrevButton = document.querySelector(
  "[data-testimonio-carousel-prev]"
);
const testimoniosNextButton = document.querySelector(
  "[data-testimonio-carousel-next]"
);
let testimoniosCurrentIndex = 0;

function showTestimonioSlide(index) {
  if (index < 0 || index >= carouselTestimoniosItems.length) {
    return;
  }

  carouselTestimoniosItems.forEach((item, i) => {
    item.classList.toggle("hidden", i !== index);
  });
  testimoniosIndicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.setAttribute("aria-current", "true");
      indicator.classList.add("bg-white");
      indicator.classList.remove("bg-white/50");
    } else {
      indicator.setAttribute("aria-current", "false");
      indicator.classList.remove("bg-white");
      indicator.classList.add("bg-white/50");
    }
  });
  testimoniosCurrentIndex = index;
}

testimoniosIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showTestimonioSlide(index);
  });
});

testimoniosPrevButton.addEventListener("click", () => {
  const nextTestIndex =
    (testimoniosCurrentIndex - 1 + carouselTestimoniosItems.length) %
    carouselTestimoniosItems.length;
  showTestimonioSlide(nextTestIndex);
});

testimoniosNextButton.addEventListener("click", () => {
  const nextTestIndex =
    (testimoniosCurrentIndex + 1) % carouselTestimoniosItems.length;
  showTestimonioSlide(nextTestIndex);
});

showTestimonioSlide(testimoniosCurrentIndex);

// Carrusel de testimonios termina
