function addNumbers(a: number, b: number): number {
  return a + b;
}

addNumbers(1, 2);

//con arrow function

const addNumbersArrow = (a: number, b: number): number => {
  return a + b;
};
const resultArrow: number = addNumbersArrow(8, 5);

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}
const resultMultiply: number = multiply(5);

interface Character2 {
  name: string;
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character2, amount: number) => {
  character.hp += amount;
};

const aragon: Character2 = {
  name: "Aragon",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(aragon, 500);
aragon.showHp();

export {};
