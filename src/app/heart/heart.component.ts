import { Component, Input } from '@angular/core';
import { Position } from '../../models/classes/position.class';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {
  @Input()
  startPosition!: Position;

  @Input()
  index!: number;

  vx: number = 2;
  vy: number = 2;

  constructor() {
    console.log(this.startPosition)
  }

}
