let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
  if (i < 10) {
    console.log(`0${i}`);
    if (i === 3) {
      break;
    }
  } else {
    console.log(i.toString());
  }
}
/* 
Output
10
09
08
07
06
05
04
03
*/
