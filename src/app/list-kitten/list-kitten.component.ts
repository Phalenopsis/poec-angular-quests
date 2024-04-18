import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';
import { Position } from '../../models/classes/position.class';
import { interval, takeWhile } from 'rxjs';

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
  private _newKitten: Kitten = new Kitten();

  @Input() set newKitten(value: Kitten) {
    this._newKitten = value;
    this.addKitten();
  }

  @Output()
  adoptedKitten: EventEmitter<Kitten> = new EventEmitter();

  position!: Position | undefined;
  isExplode: boolean = false;
  counter: number = 40;
  tick: number = 0;

  addKitten() {
    if (this._newKitten.name !== "") this.kittenList.push(this._newKitten);
  }

  sendAndRemoveKitten(id: number, event: MouseEvent) {
    const adoptedKitten = this.kittenList.splice(id, 1);
    this.adoptedKitten.emit(adoptedKitten[0]);
    const position = new Position(event.clientX, event.clientY)
    this.position = position;
    this.isExplode = true;
    this.runExplosion();
  }

  runExplosion() {
    this.tick = 0;
    const source = interval(60);
    source
      .pipe(takeWhile(() => this.isExplode))
      .subscribe((n) => {
        this.tick += 1;
        console.log(this.tick);
        if (this.tick > this.counter) {
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
    this.position = undefined;

  }

}
