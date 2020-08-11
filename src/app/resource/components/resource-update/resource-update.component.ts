
import { Component, Input } from '@angular/core';
import { Resource } from '../../shared/resource.model';
import { ResourceService } from '../../shared/resource.service';

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

  constructor(private resourceService: ResourceService) {}

  submitForm() {
    this.resourceService
      .updateResource(this.selectedResource._id, this.selectedResource)
      .subscribe((updatedResource) => {
        console.log(updatedResource);
      })
  }
}
