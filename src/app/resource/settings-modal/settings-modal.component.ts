import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
