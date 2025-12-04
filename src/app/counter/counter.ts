import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html'
})
export class Counter {
  protected count = signal(0)

  increaseBy(value: number) {
    this.count.update((prev) => prev + value)
  }

  resetCounter() {
    this.count.set(0)
  }
}
