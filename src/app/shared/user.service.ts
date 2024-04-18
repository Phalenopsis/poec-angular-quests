import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("./../assets/json/user.json");
  }
}
