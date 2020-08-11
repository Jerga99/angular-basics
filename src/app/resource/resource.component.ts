
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from './shared/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent {

  public selectedResource: Resource;
  public isDetailView = true;
  public resources: Resource[] = [];

  constructor(private http: HttpClient) {
    this.getResources();
  }

  private getResources() {
    this.http
      .get('http://localhost:4200/api/resources')
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

