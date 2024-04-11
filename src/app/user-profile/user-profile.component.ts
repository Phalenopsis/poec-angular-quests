import { Component } from '@angular/core';
import { User } from './../models/types/user.type';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  quote: string = "";
  isShow: boolean = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
