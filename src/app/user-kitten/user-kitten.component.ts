import { Component, Input } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {
  kittenList: Kitten[] = [];
  private _lastAddoptedKitten: Kitten = new Kitten();

  @Input() set lastAdoptedKitten(value: Kitten) {
    this._lastAddoptedKitten = value;
    this.adoptKitten();
  }

  adoptKitten() {
    if (this._lastAddoptedKitten.name !== "") this.kittenList.push(this._lastAddoptedKitten);
  }
}
