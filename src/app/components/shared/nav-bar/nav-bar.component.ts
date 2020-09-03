import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isExpanded = true;
  logeado = false;
  @Output() changeExpanded: EventEmitter<boolean> = new EventEmitter();
  constructor(private loginS: LoginService, public route: Router) {
    this.logeado = loginS.estaLogeado();
  }

  ngOnInit(): void {
  }

  changeIt(): void {
    this.isExpanded = !this.isExpanded;
    this.changeExpanded.emit(this.isExpanded);
  }

  btnTempLogin(): void {
    localStorage.setItem('login_sport_capsule', 'asd');
    location.reload();
  }

  logout(){
    localStorage.removeItem('login_sport_capsule');
    this.route.navigateByUrl('');
    setTimeout(() => {
      location.reload();
    }, 500);
  }

}
