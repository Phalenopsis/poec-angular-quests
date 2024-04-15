import { Component } from '@angular/core';
import { SignUpUser } from '../models/types/signupuser.type';
import { last } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  newUser: SignUpUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.newUser);
  }
}
