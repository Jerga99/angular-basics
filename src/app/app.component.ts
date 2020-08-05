
import { Component } from '@angular/core';



// Decorator
// Syntactic sugar for a function thats wraps data structure and provides
// aditional functionalities to it
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hello I am new value'

  generateNumber() {
    return 1;
  }
}
