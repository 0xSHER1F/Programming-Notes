let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let regex =
  /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?\w{2}=\d+&\w{3}=\w+)?/gi;

console.log(url1.match(regex));
console.log(url2.match(regex));
console.log(url3.match(regex));
console.log(url4.match(regex));
console.log(url5.match(regex));
