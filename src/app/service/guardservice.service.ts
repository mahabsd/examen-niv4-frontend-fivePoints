import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceService  {
 isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }

  // login(user) {
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //  /// const loggeduser = JSON.parse(localStorage.getItem("loggeduser")) || [];

  //   const test = users.find(use => use.email === user.email && use.password === user.password);
  //   if (test !== undefined) {
  //     localStorage.setItem('token', 'JWT');
  //     this.isLoginSubject.next(true);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  // register(user) {
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   users.push(user)
  //   localStorage.setItem('users', JSON.stringify(users));
  // }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else {
      return true;
    }

  }
  
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }

}