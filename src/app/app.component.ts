import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quest-angular';
  onomatopiaList: string[] = [];

  onReceiveOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
    console.log(this.onomatopiaList);
  }
}
