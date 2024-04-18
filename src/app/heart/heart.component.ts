import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    this._actualPosition = new Position(0, 0);
  }
  _actualPosition!: Position;

  @Input()
  kittenCard!: number;

  @Output()
  stopHeartExplosion: EventEmitter<boolean> = new EventEmitter();

  isAlive = true;
  counter: number = 40;
  _index: number | undefined;
  vx: number = 15;
  vy: number = 15;

  @Input() set index(value: number) {
    this._index = value;
    this.calcVelocity(value);
    this.runHeart();
  }

  runHeart() {
    const source = interval(60);
    source
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((n) => {
        this.counter -= 1;
        if (this.counter < 0) {
          this.resetExplosion();
        }
        this.move();
      });
  }

  move() {
    this._actualPosition.move(this.vx, this.vy);
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  resetExplosion() {
    this.isAlive = false;
    this._index = undefined;
    this.stopHeartExplosion.emit(true);
  }

  calcVelocity(value: number) {
    const angle = value * 360 / 10;
    const angleRad = angle * Math.PI / 180
    this.vx *= Math.cos(angleRad);
    this.vy *= Math.sin(angleRad);
  }

}
