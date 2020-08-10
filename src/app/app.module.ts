
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';
import { ResourceSearchComponent } from './resource/components/resource-search/resource-search.component';
import { ResourceListComponent } from './resource/components/resource-list/resource-list.component';
import { ResourceDetailComponent } from './resource/components/resource-detail/resource-detail.component';
import { ResourceUpdateComponent } from './resource/components/resource-update/resource-update.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  // The set od components, directives, pipes (declarables) that belong to
  // this module
  declarations: [
    AppComponent,
    ResourceComponent,
    ResourceSearchComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceUpdateComponent,
    HeaderComponent
  ],
  // The set of NgModules whose exported declarables are available to template
  // in this module
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
