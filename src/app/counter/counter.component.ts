

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent {
  counter = 0;

  incrementCounter(num: number) {
    this.counter += num;
  }
}
