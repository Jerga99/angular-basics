import { Component, Input } from '@angular/core';
import { Resource } from '../../shared/resource.model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent  {
  @Input() resources: Resource[];

  get jsonResources() {
    return JSON.stringify(this.resources);
  }
}
