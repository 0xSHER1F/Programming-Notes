// class Shorten {
//   public id: number;
//   public username: string;
//   protected title: string;
//   constructor(id: number, username: string, title: string) {
//     this.id = id;
//     this.username = username;
//     this.title = title;
//   }
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

/* Summarized Code */

class Shorten {
  constructor(
    public id: number,
    public username: string,
    public title: string
  ) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);
