
import { NgModule } from '@angular/core';
import { ResourceComponent } from './resource.component';
import { ResourceSearchComponent } from './components/resource-search/resource-search.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailComponent } from './components/resource-detail/resource-detail.component';
import { ResourceUpdateComponent } from './components/resource-update/resource-update.component';

@NgModule({
  declarations: [
    ResourceComponent,
    ResourceSearchComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceUpdateComponent
  ],
  exports: [
    ResourceComponent
  ]
})
export class ResourceModule { }
