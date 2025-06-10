import {
  ChangeDetectionStrategy,
  Component,
  input,
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

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    console.log({ newCharacter });

    this.resetFiels();
  }
  resetFiels() {
    this.name.set("");
    this.power.set(0);
  }
}
