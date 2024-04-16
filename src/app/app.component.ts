import { Component } from '@angular/core';
import { Kitten } from './models/types/kitten.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quest-angular';
  kittenCreated: Kitten = {
    name: "",
    race: "",
    birthday: new Date(),
    imageSrc: ""
  };
  isKittenCreated: boolean = false;

  onReceiveKitten(event: Kitten) {
    this.isKittenCreated = true;
    this.kittenCreated = event;
  }
}
