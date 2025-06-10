import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { CharacterListComponent } from "../../components/dragoball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragoball/character-add/dragonball-character-add.component";
import { DragonballService } from "../../services/dragonball.services";

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
  public dragonballService = inject(DragonballService);
}
