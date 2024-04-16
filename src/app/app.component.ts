import { Component } from '@angular/core';
import { Kitten } from './models/classes/kitten.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quest-angular';
  kittenCreated: Kitten = new Kitten();
  adoptedKitten: Kitten = new Kitten();
  isKittenCreated: boolean = false;

  onReceiveKitten(event: Kitten) {
    this.isKittenCreated = true;
    this.kittenCreated = { ...event };
  }

  onAdoptKitten(event: Kitten) {
    this.adoptedKitten = { ...event };
  }
}
