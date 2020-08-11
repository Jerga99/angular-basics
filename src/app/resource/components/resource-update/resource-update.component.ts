
import { Component, Input } from '@angular/core';
import { Resource } from '../../shared/resource.model';

@Component({
  selector: 'app-resource-update',
  templateUrl: './resource-update.component.html',
  styleUrls: ['./resource-update.component.scss']
})
export class ResourceUpdateComponent  {

  @Input() selectedResource: Resource;

  submitForm() {
   alert(JSON.stringify(this.selectedResource));
  }
}
