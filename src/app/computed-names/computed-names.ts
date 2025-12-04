import { Component, computed, signal } from '@angular/core';

interface Person {
  name: string;
  gender: 'male' | 'female';
}

@Component({
  templateUrl: './computed-names.html'
})
export class ComputedNames {
  protected person = signal<Person | null>(null);

  protected decoratedName = computed(() => {
    const person = this.person();
    if (person?.gender === 'male') return `Sr. ${person.name}`;
    if (person?.gender === 'female') return `Ms. ${person.name}`;
    return 'Unknown';
  });

  setPerson(value: Person) {
    this.person.set(value);
  }
}
