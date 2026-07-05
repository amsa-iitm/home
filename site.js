const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = document.body.dataset.page;
document.querySelectorAll(".nav-menu a").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
  }
});

const slides = Array.from(document.querySelectorAll(".slide"));
let slideIndex = 0;

function showSlide(index) {
  if (!slides.length) return;
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === slideIndex));
}

document.querySelector("[data-slide='prev']")?.addEventListener("click", () => showSlide(slideIndex - 1));
document.querySelector("[data-slide='next']")?.addEventListener("click", () => showSlide(slideIndex + 1));

if (slides.length) {
  showSlide(0);
  setInterval(() => showSlide(slideIndex + 1), 5200);
}

const filterButtons = document.querySelectorAll("[data-filter]");
const filterItems = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterItems.forEach((item) => {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector("button");

document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (!lightbox || !lightboxImage || !img) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("is-open");
  });
});

function closeLightbox() {
  lightbox?.classList.remove("is-open");
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
