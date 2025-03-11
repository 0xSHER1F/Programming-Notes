interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

class Player implements Play {
  constructor(
    public id: number,
    public title: string,
    public level: number | string
  ) {}
  logIn(): void {
    console.log(`Logged In`);
  }
  logOut(msg: string): void {
    console.log(`Logged Out, ${msg}`);
  }
}

// Create Your Class Here

let player1 = new Player(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye
