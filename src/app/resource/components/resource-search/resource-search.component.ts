import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.scss']
})
export class ResourceSearchComponent {
  @Output() onSearch = new EventEmitter<string>();

}
