import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {
  kittenList: Kitten[] = [];
  private _newKitten: Kitten = new Kitten();

  @Input() set newKitten(value: Kitten) {
    this._newKitten = value;
    this.addKitten();
  }

  @Output()
  adoptedKitten: EventEmitter<Kitten> = new EventEmitter();

  addKitten() {
    if (this._newKitten.name !== "") this.kittenList.push(this._newKitten);
    console.log(this.kittenList);
  }

  sendAndRemoveKitten(id: number) {
    const adoptedKitten = this.kittenList.splice(id, 1);
    this.adoptedKitten.emit(adoptedKitten[0]);
  }
}
