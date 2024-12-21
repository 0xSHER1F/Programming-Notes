[...document.body.children].forEach((element) => {
  element.addEventListener("click", function (event) {
    console.log(`This Is ${event.target.tagName}`);
  });
});
