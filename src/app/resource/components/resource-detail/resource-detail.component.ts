import { Component, Input } from '@angular/core';
import { Resource } from '../../shared/resource.model';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {
  @Input() resource: Resource;
}
