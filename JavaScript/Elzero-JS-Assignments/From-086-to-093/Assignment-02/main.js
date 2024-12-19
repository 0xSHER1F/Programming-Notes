let myImages = document.images;

for (let i = 0; i < myImage.length; i++) {
  myImages[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImages[i].setAttribute("alt", "Elzero Logo");
}

document.body.style =
  "display:flex; flex-flow:row wrap; gap:30px ; background-color:#333";
