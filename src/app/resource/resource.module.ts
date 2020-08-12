
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResourceComponent } from './resource.component';
import { ResourceSearchComponent } from './components/resource-search/resource-search.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailComponent } from './components/resource-detail/resource-detail.component';
import { ResourceUpdateComponent } from './components/resource-update/resource-update.component';
import { ResourceNewComponent } from './resource-new/resource-new.component';
import { ResourceOutletComponent } from './resource-outlet.component';

const routes: Routes = [
  { path: 'resources', component: ResourceOutletComponent,
    children: [
      { path: '', component: ResourceComponent },
      { path: 'new', component: ResourceNewComponent },
  ]}
];

@NgModule({
  declarations: [
    ResourceComponent,
    ResourceSearchComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceUpdateComponent,
    ResourceNewComponent,
    ResourceOutletComponent
  ],
  exports: [
    ResourceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ResourceModule { }
