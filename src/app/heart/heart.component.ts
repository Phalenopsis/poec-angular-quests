import { Component, Input } from '@angular/core';
import { Position } from '../../models/classes/position.class';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {

  _startPosition!: Position;
  @Input() set startPosition(value: Position) {
    this._startPosition = new Position(0, 0);
  }

  @Input()
  kittenCard!: number;

  alive = true;
  counter: number = 40;
  _index!: number;
  vx: number = 15;
  vy: number = 15;

  @Input() set index(value: number) {
    this._index = value;
    const angle = value * 360 / 10;
    const angleRad = angle * Math.PI / 180
    this.vx *= Math.cos(angleRad);
    this.vy *= Math.sin(angleRad);
    this.runHeart();
  }




  runHeart() {
    const source = interval(60);
    source
      .pipe(takeWhile(() => this.alive))
      .subscribe((n) => {
        this.counter -= 1;
        if (this.counter < 0) {
          this.alive = false;
        }
        this.move();
      });
  }

  move() {
    this._startPosition.move(this.vx, this.vy);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
