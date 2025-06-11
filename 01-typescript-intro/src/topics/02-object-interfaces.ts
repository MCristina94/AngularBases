const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  //de esta manera se genera la interfaz de un objeto
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //al usar ? es opcional este valor
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
