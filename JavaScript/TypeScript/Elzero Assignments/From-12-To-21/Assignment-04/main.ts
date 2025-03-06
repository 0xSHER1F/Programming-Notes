function yesOrNo(val: number | boolean): boolean {
  return (val as number) > 10;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
