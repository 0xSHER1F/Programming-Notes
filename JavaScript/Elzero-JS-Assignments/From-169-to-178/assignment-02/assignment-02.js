xhrRequest = new XMLHttpRequest();

xhrRequest.open("GET", "articles.json", true);

xhrRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
  }
};

xhrRequest.send();
