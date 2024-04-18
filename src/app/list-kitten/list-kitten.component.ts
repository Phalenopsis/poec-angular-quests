import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { interval, takeWhile } from 'rxjs';
import { NUMBER_OF_HEART_TICKS, NUMBER_OF_HEARTS, NUMBER_OF_WAVES, TICK_DURATION } from '../models/constant';
import { Position } from '../models/classes/position.class';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {
  kittenList: Kitten[] = [
    new Kitten("Toulouse", "aristocat", new Date("1905-12-25"), "https://vainkeurz.com/wp-content/uploads/2021/06/toulouse.png"),
    new Kitten("Marie", "aristocat", new Date("1905-12-25"), "https://i.pinimg.com/236x/56/7e/a6/567ea64edf03cc158cd3ac7954e55c98.jpg"),
    new Kitten("Berlioz", "aristocat", new Date("1905-12-25"), "https://vainkeurz.com/wp-content/uploads/2021/06/berlioz.png")
  ];

  @Input() set newKitten(value: Kitten) {
    this._newKitten = value;
    this.addKitten();
  }

  @Output()
  adoptedKitten: EventEmitter<Kitten> = new EventEmitter();

  private _newKitten: Kitten = new Kitten();
  arrayForHeartGeneration = [...Array(NUMBER_OF_HEARTS).keys()];
  arrayForWavesGeneration = [...Array(NUMBER_OF_WAVES).keys()];

  position!: Position;
  isExplode: boolean = false;
  counter: number = NUMBER_OF_HEART_TICKS;
  tick: number = 0;


  addKitten() {
    if (this._newKitten.name !== "") this.kittenList.push(this._newKitten);
  }

  sendAndRemoveKitten(id: number, event: MouseEvent) {
    const adoptedKitten = this.kittenList.splice(id, 1);
    this.adoptedKitten.emit(adoptedKitten[0]);
    this.position = new Position(event.clientX, event.clientY);
    this.isExplode = true;
    this.runExplosion();
  }

  runExplosion() {
    this.tick = 0;
    const source = interval(TICK_DURATION * NUMBER_OF_WAVES / 2);
    source
      .pipe(takeWhile(() => this.isExplode))
      .subscribe((n) => {
        this.tick += 1;
        if (this.tick > this.counter * NUMBER_OF_WAVES / 2) {
          this.resetExplosion();
        }
      });
  }

  ngOnDestroy() {
    this.isExplode = false;
  }

  resetExplosion() {
    this.isExplode = false;
    this.tick = 0;
  }

}
