let num = 9;

if (num < 10) {
  console.log(`${"00"}${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`${"0"}${num}`);
} else if (num >= 100) {
  console.log(num.toString());
}
