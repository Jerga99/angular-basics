import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit } from '@angular/core';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.scss']
})
export class ResourceSearchComponent implements AfterViewInit {

  @ViewChild('searchInput') input: ElementRef;

  @Output() onSearch = new EventEmitter<string>();

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .subscribe((e: any) => {
        this.onSearch.emit(e.target.value)
      })
  }

}
