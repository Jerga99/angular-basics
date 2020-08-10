
import { Component } from '@angular/core';
import { Resource } from './shared/resource.model';

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
  },
  {
    _id: '4',
    title: 'Resource 4',
    description: 'Resource desc 4',
    link: 'https://google.com',
    type: 'book'
  }]

  public addResource(): Resource[] {
    const _id = '_' + Math.random().toString(36).substr(2, 9);
    const newResource = {
      _id,
      title: `Title ${_id}`,
      description: `Description ${_id}`,
      link: `link ${_id}`,
      type: 'video'
    }

    this.resources.unshift(newResource);
    return this.resources;
  }
}

