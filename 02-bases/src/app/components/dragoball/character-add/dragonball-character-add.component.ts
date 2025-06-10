import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from "@angular/core";
import { Character } from "../../../interfaces/charecter.interface";

@Component({
  selector: "app-dragonball-character-add",
  imports: [],
  templateUrl: "./dragonball-character-add.component.html",
})
export class DragonballCharacterAddComponent {
  name = signal("");
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);
    this.resetFiels();
  }
  resetFiels() {
    this.name.set("");
    this.power.set(0);
  }
}
