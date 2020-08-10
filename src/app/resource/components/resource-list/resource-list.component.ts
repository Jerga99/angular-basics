import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../shared/resource.model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent  {
  @Input() resources: Resource[];
  @Input() activeId: string;
  @Output() onResourceClick = new EventEmitter<Resource>();

  get jsonResources() {
    return JSON.stringify(this.resources);
  }

  handleResourceSelect(resource: Resource) {
    this.onResourceClick.next(resource);
  }
}
