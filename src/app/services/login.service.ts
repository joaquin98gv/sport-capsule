import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  estaLogeado(): boolean {
    return (localStorage.getItem('login_sport_capsule') === null ? false : true);
  }
}
