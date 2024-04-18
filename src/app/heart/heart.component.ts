import { Component, Input } from '@angular/core';
import { Position } from '../models/classes/position.class';
import { BASE_HEART_VELOCITY, NUMBER_OF_HEART_TICKS, NUMBER_OF_HEARTS } from '../models/constant';


@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {
  @Input() set clickPosition(value: Position) {
    this.xBase = window.innerWidth / 2 - value.x / 2;
    this.resetPosition();
    console.log(this.xBase)
  }

  @Input() set tick(value: number) {
    this._tick = value - this.initialTick;
    if (this.tick == NUMBER_OF_HEART_TICKS) {
      this.resetPosition();
    }
    this.move();
  }
  @Input() initialTick: number = 0;

  _clickPosition: Position = new Position(0, 0);
  actualPosition: Position = new Position(0, 0);
  xBase: number = 0;
  _tick: number = 0;
  vx: number = BASE_HEART_VELOCITY;
  vy: number = BASE_HEART_VELOCITY;

  @Input() set index(value: number) {
    this.calcVelocity(value);
  }

  resetPosition() {
    this.actualPosition = new Position(this.xBase, 0);
  }

  move() {
    if (this._tick > this.initialTick) this.actualPosition.move(this.vx, this.vy);
  }

  calcVelocity(value: number) {
    const angle = value * 360 / NUMBER_OF_HEARTS;
    const angleRad = angle * Math.PI / 180
    this.vx *= Math.cos(angleRad);
    this.vy *= Math.sin(angleRad);
  }

}
