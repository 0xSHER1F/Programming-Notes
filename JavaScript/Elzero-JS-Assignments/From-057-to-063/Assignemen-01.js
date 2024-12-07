function sayHello(theName, theGender = "") {
  if (theGender === "Male") {
    theGender = "Mr";
  } else if (theGender === "Female") {
    theGender = "Miss";
  }

  document.write(`<p>Hello ${theGender} ${theName}</p>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
