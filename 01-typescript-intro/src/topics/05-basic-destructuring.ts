interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anothersong,
  details: { author },
} = audioPlayer; // se desestructuro audoplayer y se extrajo song, adicional se asigno de nombre anotherSong
const { details } = audioPlayer;
const { year } = details; // es mejor practica desestructurar de esta manera cuando hay anidacion como con details.

//desestructuracion de arreglos

const [p1, p2, p3]: string[] = ["Goku", "Vegeta", "Trunk"];

console.log("Personaje 3", p3 || "Personaje no encontrado");

export {};
