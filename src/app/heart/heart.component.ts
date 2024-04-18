import { Component, Input } from '@angular/core';
import { Position } from '../models/classes/position.class';
import { BASE_HEART_VELOCITY, NUMBER_OF_HEART_TICKS, NUMBER_OF_HEARTS } from '../models/constant';


@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {
  @Input() set xBase(value: Position) {
    this._xBase = window.innerWidth / 2 - value.x / 2;
    this.resetPosition();
  }

  @Input() set tick(value: number) {
    this._tick = value - this.initialTick;
    if (this.tick == NUMBER_OF_HEART_TICKS) {
      this.resetPosition();
    }
    this.move();
  }
  @Input() initialTick: number = 0;

  actualPosition: Position = new Position(0, 0);
  _xBase: number = 0;
  _tick: number = 0;
  _index: number = 0;
  vx: number = BASE_HEART_VELOCITY;
  vy: number = BASE_HEART_VELOCITY;

  @Input() set index(value: number) {
    this._index = value;
    this.calcVelocity();
  }

  resetPosition() {
    this.actualPosition = new Position(this._xBase, 0);
  }

  move() {
    this.calcVelocity(this._tick);
    if (this._tick > this.initialTick)
      this.actualPosition.move(
        this.vx * (this._tick - this.initialTick),
        this.vy * (this._tick - this.initialTick));
  }

  calcVelocity(angleAdded: number = 0) {
    const angle = angleAdded * 15 + (this._index * 360 / NUMBER_OF_HEARTS);
    const angleRad = angle * Math.PI / 180
    this.vx = BASE_HEART_VELOCITY * Math.cos(angleRad);
    this.vy = BASE_HEART_VELOCITY * Math.sin(angleRad);
  }

}
