export class Person {
  public name: string;
  public address: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

// const ironman = new Person("Iron Man", "New York");
// const batman = new Hero("Batman", 45, "Bruce Wayne");
// console.log(ironman);
// console.log(batman);

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    this.person = new Person(realName, "New York");
  }
}

const tony = new Person("Tony Stark", "New York");
const ironMan = new Hero("Iron Man", 45, "Tony", tony);
