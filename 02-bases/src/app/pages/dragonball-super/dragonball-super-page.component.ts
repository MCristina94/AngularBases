import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragoball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegueta', power: 8000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFiels();
  }

  resetFiels() {
    this.name.set('');
    this.power.set(0);
  }
}
