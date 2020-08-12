
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Resource, ResourceAlert } from '../../shared/resource.model';
import { ResourceService } from '../../shared/resource.service';

@Component({
  selector: 'app-resource-update',
  templateUrl: './resource-update.component.html',
  styleUrls: ['./resource-update.component.scss']
})
export class ResourceUpdateComponent implements OnDestroy  {

  private timeoutId: number;

  selectedResource: Resource;
  types = Resource.types;
  alert: ResourceAlert;

  @Output() onResourceUpdate = new EventEmitter<Resource>();

  @Input() set resource(selectedResource: Resource) {
    if (this.selectedResource && (this.selectedResource._id !== selectedResource?._id)) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.alert = new ResourceAlert();
      }
    }

    this.selectedResource = {...selectedResource};
  }

  constructor(private resourceService: ResourceService) {}

  ngOnDestroy() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }

  private setAlert(type: string, message: string) {
    this.alert = new ResourceAlert;
    this.alert[type] = message;

    this.timeoutId = setTimeout(() => this.alert = new ResourceAlert(), 2000)
  }

  submitForm() {
    this.resourceService
      .updateResource(this.selectedResource._id, this.selectedResource)
      .subscribe(updatedResource => {
        this.onResourceUpdate.emit(updatedResource);
        this.setAlert('success', 'Resource was updated!');
      }, (error: string) => {
        this.setAlert('error', error);
      })
  }
}
