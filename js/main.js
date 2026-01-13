/* =========================
   GLOBAL HELPERS
========================= */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================
   MOBILE NAVBAR
========================= */
const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* =========================
   IMAGE MODAL (GALLERY)
========================= */
const modal = $("#imageModal");
const modalImg = $("#modalImg");
const closeModal = $("#closeModal");

$$(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

if (modal) {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}
