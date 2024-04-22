import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.scss'
})
export class DisplayUserComponent {
  @Input()
  user!: User;
}
