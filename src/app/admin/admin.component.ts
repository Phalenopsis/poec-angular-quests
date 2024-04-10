import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  public isAdmin: boolean = false;

  toogleAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
