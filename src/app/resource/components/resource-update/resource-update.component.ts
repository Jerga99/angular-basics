
import { Component, Input } from '@angular/core';
import { Resource } from '../../shared/resource.model';

@Component({
  selector: 'app-resource-update',
  templateUrl: './resource-update.component.html',
  styleUrls: ['./resource-update.component.scss']
})
export class ResourceUpdateComponent  {

  selectedResource: Resource;
  types = Resource.types;

  @Input() set resource(selectedResource: Resource) {
    this.selectedResource = {...selectedResource};
  }

  submitForm() {
   alert(JSON.stringify(this.selectedResource));
  }
}
