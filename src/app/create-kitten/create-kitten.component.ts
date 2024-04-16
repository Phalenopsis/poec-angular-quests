import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
  newKitten: Kitten = new Kitten();

  @Output()
  sendKitten: EventEmitter<Kitten> = new EventEmitter();

  saveKitten() {
    this.sendKitten.emit(this.newKitten);
  }
}
