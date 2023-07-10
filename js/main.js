/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("nav-menu");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const navigation_box = document.querySelector("#navigation_box");
const menuToggle = document.querySelector("#menuToggle");
const nav_links = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navigation_box.classList.toggle("slidein_active");
  transform_hamburger();
});
nav_links.forEach((el) => {
  el.addEventListener("click", () => {
    navigation_box.classList.toggle("slidein_active");
    transform_hamburger();
  });
});

function transform_hamburger() {
  let first = document.querySelector("#first_span");
  let second = document.querySelector("#second_span");
  let third = document.querySelector("#third_span");

  first.classList.toggle("first_span_active");
  second.classList.toggle("second_span_active");
  third.classList.toggle("third_span_active");
}

//! ============= resume button ==========
document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1rqMbM3VoH7y1Ith-FR3DZ71EGNMxyK3E/view?usp=sharing"
  );
};

document.getElementById("resume-button-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1rqMbM3VoH7y1Ith-FR3DZ71EGNMxyK3E/view?usp=sharing"
  );
};

///
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-card, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });
const typed = new Typed(".multiple-text", {
  strings: [
    "Full Stack Web Developer",
    "With a deep passion for creating web solutions",
    "innovative and user-centric",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  smartBackspace: true, // Enables smart backspacing to simulate typing forward and backward
});
