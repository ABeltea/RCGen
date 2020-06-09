import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  template: `
  <span *ngIf="dataSource.iconCss" class="e-menu-icon {{dataSource.iconCss}}"></span>
  {{dataSource.header}} {{dataSource.text}}
  <span *ngIf="dataSource.templateHeader" class="e-login-content">
    <button ejs-button cssClass="e-info">Sign In</button>
  </span>
`
})
export class DeviceComponent {
  @Input()
  dataSource: any;
}