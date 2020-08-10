
import { Component } from '@angular/core';
import { Resource } from './shared/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent {

  public selectedResource: Resource;
  public isDetailView = true;
  public resources = [new Resource({
    _id: '1',
    title: 'Resource 1',
    description: 'Resource desc 1',
    link: 'https://google.com',
    type: 'video'
  }),new Resource({
    _id: '2',
    title: 'Resource 2',
    description: 'Resource desc 2',
    link: 'https://google.com',
    type: 'blog'
  }),new Resource({
    _id: '3',
    title: 'Resource 3',
    description: 'Resource desc 3',
    link: 'https://google.com',
    type: 'video'
  }),
  ]

  public addResource(): Resource[] {
    const _id = '_' + Math.random().toString(36).substr(2, 9);
    const newResource = new Resource({
      _id,
      title: `Title ${_id}`,
      description: `Description ${_id}`,
      link: `link ${_id}`,
      type: 'video'
    })

    this.resources.unshift(newResource);
    return this.resources;
  }

  public toggleView() {
    this.isDetailView = !this.isDetailView;
  }

  public handleResourceSelect(resource: Resource) {
    this.selectedResource = {...resource};
    alert(JSON.stringify(this.selectedResource));
  }

  get resourcesCount(): number {
    return this.resources.length;
  }

  get btnViewClass(): String {
    return this.isDetailView ? 'btn-warning' : 'btn-primary';
  }
}

