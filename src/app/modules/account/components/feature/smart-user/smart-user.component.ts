import { Component } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';
import { UserService } from '../../../../../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smart-user',
  templateUrl: './smart-user.component.html',
  styleUrl: './smart-user.component.scss'
})
export class SmartUserComponent {
  private userList: User[] = [];
  public user!: User;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.userList = users);

  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.findById(id);
  }

  findById(id: number): void {
    this.userService.getUsers().subscribe(users => this.user = users!.find(user => user.id == id) as User);
  }
}
