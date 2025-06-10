import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragoball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragoball/character-add/dragonball-character-add.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball-super-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DragonballSuperPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 },
    { id: 2, name: "Vegueta", power: 8000 },
  ]);
}
