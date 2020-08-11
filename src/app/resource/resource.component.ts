
import { Component, OnInit } from '@angular/core';
import { Resource } from './shared/resource.model';
import { ResourceService } from './shared/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent implements OnInit {

  public selectedResource: Resource;
  public isDetailView = true;
  public resources: Resource[] = [];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
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
      this.selectResource = null;
      return null;
    }

    this.selectedResource = {...resource};
    return this.selectedResource;
  }

  public toggleView() {
    this.isDetailView = !this.isDetailView;
  }

  public handleResourceSelect(resource: Resource) {
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

