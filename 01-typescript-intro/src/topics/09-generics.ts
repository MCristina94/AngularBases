export function whatsMyType<T>(argument: T): T {
  // T significa que es generico
  return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(30);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIArray);
