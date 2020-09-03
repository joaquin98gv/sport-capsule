import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExpanded = true;

  changeIt(event: boolean): void {
    console.log(event);
    this.isExpanded = event;
  }
}
