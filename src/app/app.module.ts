
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  // The set od components, directives, pipes (declarables) that belong to
  // this module
  declarations: [
    AppComponent,
    ResourceComponent
  ],
  // The set of NgModules whose exported declarables are available to template
  // in this module
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
