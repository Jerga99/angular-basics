
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resource, ResourceAlert } from './shared/resource.model';
import { ResourceService } from './shared/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent implements OnInit, OnDestroy {

  private timeoutId: number;

  public alert: ResourceAlert;
  public selectedResource: Resource;
  public isDetailView = true;
  public resources: Resource[] = [];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  ngOnDestroy() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }

  private getResources() {
    this.resourceService
      .getResources()
      .subscribe((resources: Resource[]) => {
        this.resources = resources;
      })
  }

  private selectResource(resource: Resource): Resource {
    if (!resource?._id) {
      this.selectedResource = null;
      return null;
    }

    this.selectedResource = {...resource};
    return this.selectedResource;
  }

  private findResourceIndex(resource: Resource): number {
    return this.resources.findIndex(r => r._id === resource._id);
  }

  private setAlert(type: string, message: string) {
    this.alert = new ResourceAlert;
    this.alert[type] = message;

    this.timeoutId = setTimeout(() => this.alert = new ResourceAlert(), 2000)
  }

  public updateResource = (resource: Resource) => {
    this.resourceService
      .updateResource(resource._id, resource)
      .subscribe(updatedResource => {
        this.hydrateResources(updatedResource);
        this.setAlert('success', 'Resource was updated!');
      }, (error: string) => {
        this.setAlert('error', error);
      })
  }

  public deleteResource() {
    const isConfirm = confirm('Are you sure?');

    if (!this.activeResource?._id) {
      alert('No resource selected!');
      return;
    }

    if (isConfirm) {
      this.resourceService
        .deleteResource(this.activeResource._id)
        .subscribe(dResource => {
          const index = this.findResourceIndex(dResource);
          this.resources.splice(index, 1);
          this.selectResource(this.resources[0]);
        })
    }
  }

  public hydrateResources(resource: Resource) {
    const index = this.findResourceIndex(resource);
    this.resources[index] = resource;
    this.selectResource(resource);
  }

  public toggleView() {
    this.isDetailView = !this.isDetailView;
  }

  public handleResourceSelect(resource: Resource) {
    this.alert = new ResourceAlert();
    this.selectResource(resource);
  }

  get hasResources(): boolean {
    return this.resources && this.resourcesCount > 0;
  }

  get activeResource(): Resource {
    return (this.selectedResource || (this.hasResources && this.resources[0])) || null;
  }

  get resourcesCount(): number {
    return this.resources.length;
  }

  get btnViewClass(): String {
    return this.isDetailView ? 'btn-warning' : 'btn-primary';
  }
}

