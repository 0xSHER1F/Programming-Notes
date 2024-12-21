let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currClasses = document.querySelector("[title='Current']");
let parentDiv = document.querySelector(".classes-list");
let childDiv = parentDiv.lastElementChild;

function addOrRemove() {
  document.querySelectorAll("span").forEach((ele) => ele.remove());

  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (addClass.value) {
      currClasses.classList.add(
        addClass.value.toLowerCase().trim().split(" ")[i]
      );
    }
    if (removeClass.value) {
      currClasses.classList.remove(
        removeClass.value.toLowerCase().trim().split(" ")[i]
      );
    }
  }
  this.value = "";

  if (currClasses.classList.length) {
    [...currClasses.classList].sort().forEach((ele) => {
      let newSpan = document.createElement("span");
      newSpan.textContent = ele;
      childDiv.appendChild(newSpan);
    });
  } else {
    childDiv.textContent = "No Classes To Show";
  }
}

addClass.onblur = addOrRemove;
removeClass.onblur = addOrRemove;
