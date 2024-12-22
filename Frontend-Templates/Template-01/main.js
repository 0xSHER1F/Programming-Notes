let links = document.querySelector(".links ul");

let menuSpan = document.querySelector(".icon");

menuSpan.addEventListener("click", () => {
  if (links.style.display === "none") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
});

let scrollBtn = document.querySelector("#scrollUpButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});
