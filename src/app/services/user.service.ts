import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {User} from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUserURL = "http://localhost:3000/api/users/";

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUserURL);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUserURL, user);
  }
  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(this.baseUserURL + id);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseUserURL + id);
  }

}

