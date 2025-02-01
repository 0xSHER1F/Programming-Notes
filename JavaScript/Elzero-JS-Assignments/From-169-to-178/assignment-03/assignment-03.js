xhrRequest = new XMLHttpRequest();

xhrRequest.open("GET", "articles.json", true);

xhrRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i in mainData) {
      mainData[i].category = "All";
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};

xhrRequest.send();
