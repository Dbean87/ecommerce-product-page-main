const closeNav = document.querySelector("[data-close-nav]");
const hamburger = document.querySelector("[data-hamburger]");

closeNav.onclick = () => {
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector(".mobile-overlay").classList.toggle("show");

  if (document.querySelector(".nav").classList.contains("show")) {
    document.body.classList.add("no-scroll");
    console.log("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    console.log("scroll");
  }
};

hamburger.onclick = () => {
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector(".mobile-overlay").classList.toggle("show");

  if (document.querySelector(".nav").classList.contains("show")) {
    document.body.classList.add("no-scroll");
    console.log("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    console.log("scroll");
  }
};

window.addEventListener("resize", function () {
  if (
    document.querySelector(".nav").classList.contains("show") &&
    this.window.innerWidth > 1039
  ) {
    document.querySelector(".nav").classList.remove("show");
    document.querySelector(".mobile-overlay").classList.remove("show");
    console.log("resized");
  }
});
