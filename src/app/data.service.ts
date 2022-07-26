import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  authData: User[];
  isAuth: boolean = false;
  permission: boolean;
  constructor() {
    this.authData = [
      { name: 'Admin', permission: 'all', password: 'Admin' },
      { name: 'testuser', permission: 'none', password: 'testuser' },
    ];
  }
  getPermision() {
    return this.permission;
  }
  getUserValidation(user, pass) {
    let username = user;
    let password = pass;
    this.isAuth = false;
    this.authData.forEach((element) => {
      if (element.name == username && element.password == password) {
        this.isAuth = true;
        if (element.permission == 'all') {
          this.permission = true;
        } else {
          this.permission = false;
        }
      }
    });
    return this.isAuth;
  }
}
export class User {
  name: string;
  permission: string;
  password: string;
}
