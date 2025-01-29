let start = performance.now();

for (let i = 0; i < 100000; i++) {
  console.log(i);
}

let end = performance.now();

console.log(`Loop Took ${(end - start).toFixed()} Milliseconds.`);
