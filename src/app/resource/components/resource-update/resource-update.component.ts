
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource, ResourceAlert } from '../../shared/resource.model';
import { ResourceService } from '../../shared/resource.service';

@Component({
  selector: 'app-resource-update',
  templateUrl: './resource-update.component.html',
  styleUrls: ['./resource-update.component.scss']
})
export class ResourceUpdateComponent  {

  selectedResource: Resource;
  types = Resource.types;
  alert: ResourceAlert;

  @Output() onResourceUpdate = new EventEmitter<Resource>();

  @Input() set resource(selectedResource: Resource) {
    this.selectedResource = {...selectedResource};
  }

  constructor(private resourceService: ResourceService) {}

  private setAlert(type: string, message: string) {
    this.alert = new ResourceAlert;
    this.alert[type] = message;

    setTimeout(() => this.alert = new ResourceAlert(), 2000)
  }

  submitForm() {
    this.resourceService
      .updateResource(this.selectedResource._id, this.selectedResource)
      .subscribe(updatedResource => {
        this.onResourceUpdate.emit(updatedResource);
        this.setAlert('success', 'Resource was updated!');
      })
  }
}
