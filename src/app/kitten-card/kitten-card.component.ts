import { Component, Input } from '@angular/core';
import { Kitten } from '../models/classes/kitten.class';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.scss'
})
export class KittenCardComponent {
  @Input() kitten!: Kitten;
}
