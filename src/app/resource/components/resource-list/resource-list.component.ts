import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent  {
  @Input() resources: [{_id: string, title: string, description: string}];

  get jsonResources() {
    this.resources[0].title;
    return JSON.stringify(this.resources);
  }
}
