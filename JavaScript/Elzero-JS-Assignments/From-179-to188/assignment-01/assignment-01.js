let showData = (dataLink) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data to Show"));
      }
    };
    request.open("GET", dataLink);
    request.send();
  });
};

showData("./data.json")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((finalResult) => {
    for (let i in finalResult) {
      let mainDiv = document.createElement("div");
      let title = document.createElement("h3");
      title.innerHTML = finalResult[i].title;
      let description = document.createElement("p");
      description.innerHTML = finalResult[i].description;

      mainDiv.appendChild(title);
      mainDiv.appendChild(description);

      document.body.appendChild(mainDiv);
    }
  });
