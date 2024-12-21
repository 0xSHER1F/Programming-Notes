document.querySelectorAll("p").forEach((ele) => ele.remove());

let mainDiv = document.querySelector(".our-element");

let beforeDiv = document.createElement("div");
beforeDiv.textContent = "Start";
beforeDiv.className = "start";
beforeDiv.title = "Start Element";
beforeDiv.setAttribute("data-value", "Start");

mainDiv.before(beforeDiv);

let afterDiv = document.createElement("div");
afterDiv.textContent = "End";
afterDiv.className = "end";
afterDiv.title = "End Element";
afterDiv.setAttribute("data-value", "End");

mainDiv.after(afterDiv);
