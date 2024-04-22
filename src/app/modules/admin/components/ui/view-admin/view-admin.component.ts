import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.scss'
})
export class ViewAdminComponent {
  @Input() userList: User[] = [];
}
