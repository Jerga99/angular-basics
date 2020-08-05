
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html'
})
export class CounterViewComponent {
  @Input('counterView') counter;
}
