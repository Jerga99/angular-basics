import { Component, OnInit } from '@angular/core';
import { ResourceSettings } from '../shared/resource.model';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {

  isOpen = false;
  settings = new ResourceSettings();

  constructor() { }

  ngOnInit(): void {
  }

  saveSettings() {
    alert(JSON.stringify(this.settings));
    this.isOpen = false;
  }

}
