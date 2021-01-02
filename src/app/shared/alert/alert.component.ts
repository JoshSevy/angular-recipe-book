import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-alert',
  template: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent {
  @Input() message: string;
}
