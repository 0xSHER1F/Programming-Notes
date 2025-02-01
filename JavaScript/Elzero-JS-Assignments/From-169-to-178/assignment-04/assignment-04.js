xhrRequest = new XMLHttpRequest();

xhrRequest.open("GET", "articles.json", true);

xhrRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let parentDiv = document.createElement("div");
    parentDiv.id = "data";
    for (let i in mainData) {
      let title = document.createElement("h2");
      title.innerHTML = `Title : ${mainData[i].title}`;

      let content = document.createElement("p");
      content.innerHTML = `Content :<br> ${mainData[i].content}`;

      let author = document.createElement("p");
      author.innerHTML = `Author : ${mainData[i].author}`;

      let category = document.createElement("p");
      category.innerHTML = `Category : ${mainData[i].category}`;

      let childDiv = document.createElement("div");
      childDiv.appendChild(title);
      childDiv.appendChild(content);
      childDiv.appendChild(author);
      childDiv.appendChild(category);

      parentDiv.appendChild(childDiv);

      document.body.appendChild(parentDiv);
    }
  }
};

xhrRequest.send();
