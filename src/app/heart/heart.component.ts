import { Component, Input } from '@angular/core';
import { Position } from '../models/classes/position.class';


@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {

  actualPosition: Position = new Position(0, 0);

  _tick: number = 0;
  @Input() set tick(value: number) {
    this._tick = value;
    if (this.tick == 40) {
      this.resetPosition();
    }
    this.move();
  }

  vx: number = 15;
  vy: number = 15;

  @Input() set index(value: number) {
    this.calcVelocity(value);
  }

  resetPosition() {
    this.actualPosition = new Position(0, 0);
  }

  move() {
    this.actualPosition.move(this.vx, this.vy);
  }

  calcVelocity(value: number) {
    const angle = value * 360 / 10;
    const angleRad = angle * Math.PI / 180
    this.vx *= Math.cos(angleRad);
    this.vy *= Math.sin(angleRad);
  }

}
