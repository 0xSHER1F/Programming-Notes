let myImage = document.images;

for (let i = 0; i < myImage.length; i++) {
  if (myImage[i].hasAttribute("alt")) {
    myImage[i].alt = "Old";
  } else {
    myImage[i].setAttribute("alt", "Elzero New");
  }
}
