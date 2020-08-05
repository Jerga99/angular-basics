
import { Component } from '@angular/core';


function TestDecorator(configuration) {
  return function(target) {
    target.testData = configuration;
    target.meta = {
      prop1: 'a',
      prop2: 'b'
    }
  }
}

// Decorator
// Syntactic sugar for a function thats wraps data structure and provides
// aditional functionalities to it
@TestDecorator({
  name: 'App Component Test',
  testingProp: 'Just some informations'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hello I am new value'
  name = AppComponent['testData'].name

  generateNumber() {
    return 1;
  }
}

