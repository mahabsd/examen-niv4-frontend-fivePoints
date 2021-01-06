import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  users:any=[];

  getUsers(){ return this.users;}

  usersUrl: string = "/api/";

  constructor(private http: HttpClient) { }
  addUser(data) {
    return this.http.post(this.usersUrl + "users/user/add/", data);
  }
  loginUser(data) {
    console.log(data);
    return this.http.post(this.usersUrl + "users/user/login/", data);
  }
  getUser(id) {
    return this.http.get(this.usersUrl +"users/user/"+ id );
  }
  updateUser(id, data) {
    return this.http.put(this.usersUrl +"users/user/update"+ id , data);
  }
  getAllUsers() {
    return this.http.get(this.usersUrl +"/users/getAllusers" );
  }
  addSujet(idUser, idSujet, data){
    return this.http.put(this.usersUrl + "users/deleteuserTask/"+idUser + idSujet, data);
  }
  // deleteSujet(idUser, idSujet, data){
  //   return this.http.delete(this.usersUrl + "users/deleteuserTask/"+idUser + idSujet, data);

  // }
}



//   addUsers(user) {
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     users.push(user)
//     localStorage.setItem('users',JSON.stringify(users));
//    // this.users = users

//   }
//   getUsers() {

//     return JSON.parse(localStorage.getItem("users")) || [];
//   }
//   deleteUser(i){
//     console.log(i);
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     users.splice(i, 1);
//   //  this.users = users
//     localStorage.setItem('users',JSON.stringify(users));
//   // console.log(this.users);
//   window.location.reload();

//   };
//   updateUser(i, user) {
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     users.splice(i, 1, user.value);
//     localStorage.setItem('users',JSON.stringify(users));
//   //  this.users = users

//   }

// }
