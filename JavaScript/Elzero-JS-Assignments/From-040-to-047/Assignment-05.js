let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
}
if (needle === haystack[1]) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle)) {
  console.log("Found");
}
