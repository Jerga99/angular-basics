
import { Component } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent {

  public resources = [{
    _id: '1',
    title: 'Resource 1',
    description: 'Resource desc 1',
    link: 'https://google.com',
    type: 'video'
  },{
    _id: '2',
    title: 'Resource 2',
    description: 'Resource desc 2',
    link: 'https://google.com',
    type: 'blog'
  },{
    _id: '3',
    title: 'Resource 3',
    description: 'Resource desc 3',
    link: 'https://google.com',
    type: 'book'
  }]
}

