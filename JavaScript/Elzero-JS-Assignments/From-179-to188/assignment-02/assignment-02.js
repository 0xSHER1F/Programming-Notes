async function showData(dataLink) {
  try {
    let response = await fetch(dataLink);

    if (!response.ok) {
      throw new Error("No Data to Show");
    }

    let data = await response.json();
    data.length = 5;

    for (let i in data) {
      let mainDiv = document.createElement("div");
      let title = document.createElement("h3");
      title.innerHTML = data[i].title;
      let description = document.createElement("p");
      description.innerHTML = data[i].description;

      mainDiv.appendChild(title);
      mainDiv.appendChild(description);
      document.body.appendChild(mainDiv);
    }
  } catch (error) {
    console.error(error);
  }
}

showData("./data.json");
