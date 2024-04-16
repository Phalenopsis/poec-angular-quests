import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/types/kitten.type';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
  newKitten: Kitten = {
    name: "",
    race: "",
    birthday: new Date(),
    imageSrc: ""
  };

  @Output()
  sendKitten: EventEmitter<Kitten> = new EventEmitter();

  saveKitten() {
    this.sendKitten.emit(this.newKitten);
  }
}
