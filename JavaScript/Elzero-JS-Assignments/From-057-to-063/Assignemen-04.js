function checkStatus(a, b, c) {
  let name;
  let age;
  let status;
  if (typeof a === "string") {
    name = a;
    if (typeof b === "number") {
      age = b;
      status = c;
    } else {
      age = c;
      status = b;
    }
  } else if (typeof a === "number") {
    age = a;
    if (typeof b === "string") {
      name = b;
      status = c;
    } else {
      name = c;
      status = b;
    }
  } else {
    status = a;
    if (typeof b === "string") {
      name = b;
      age = c;
    } else {
      name = c;
      age = b;
    }
  }
  if (status === true) {
    status = `You Are Available For Work`;
  } else {
    status = `You Are Not Available For Work`;
  }
  document.write(`<p>Hello ${name}, Your Age Is ${age}, ${status}</p>`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(24, "Sherif", true); // "Hello Sherif, Your Age Is 24, You Are Available For Hire"
checkStatus(true, 48, "Mohamed"); // "Hello Mohamed, Your Age Is 48, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
