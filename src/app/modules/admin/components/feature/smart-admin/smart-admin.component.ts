import { Component } from '@angular/core';
import { UserService } from '../../../../../shared/user.service';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-smart-admin',
  templateUrl: './smart-admin.component.html',
  styleUrl: './smart-admin.component.scss'
})
export class SmartAdminComponent {
  userList: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.userList = users);
  }
}
