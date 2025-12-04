import { Component, signal } from '@angular/core'
import { BasicForm } from './basic-form/basic-form'
import { AdvancedForm } from './advanced-form/advanced-form'
import { DynamicForm } from './dynamic-form/dynamic-form'

@Component({
  imports: [BasicForm, AdvancedForm, DynamicForm],
  template: `
    <h3 class="text-lg font-bold m-4">Forms Page</h3>
    <section class="flex flex-col items-center gap-4">
      <div>
        <button class="border border-gray-300 rounded cursor-pointer" (click)="setForm('basic')">Basic</button>
        <button class="border border-gray-300 rounded cursor-pointer" (click)="setForm('advanced')">Basic Alt</button>
        <button class="border border-gray-300 rounded cursor-pointer" (click)="setForm('dynamic')">Dynamic</button>
      </div>

      @switch (options()) {
        @case ('basic') {
          <app-basic-form />
        }
        @case ('advanced') {
          <app-advanced-form />
        }
        @case ('dynamic') {
          <app-dynamic-form />
        }
      }
    </section>
  `,
})
export class Forms {
  options = signal<'basic' | 'advanced' | 'dynamic'>('basic')

  setForm(type: Parameters<typeof this.options.set>[0]) {
    this.options.set(type)
  }
}
