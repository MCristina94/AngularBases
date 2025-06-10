import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('IronMan');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  getHeroDescription(name: string, age: number): string {
    return `${name} - ${age}`;
  }

  changeHero() {
    this.name.set('SpiderMan');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

  upperCase(name: string) {
    this.name.update((current) => current.toLocaleUpperCase());
  }
}
