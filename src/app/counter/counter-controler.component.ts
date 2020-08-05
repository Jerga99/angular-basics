
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-controler',
  templateUrl: './counter-controler.component.html'
})
export class CounterControlerComponent {

  @Output() onIncrement = new EventEmitter();

  increment(inc: number) {
    this.onIncrement.next(inc);
  }
}
