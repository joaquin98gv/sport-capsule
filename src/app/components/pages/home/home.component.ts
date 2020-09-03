import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logeado = false;
  constructor(private loginS: LoginService) {
    this.logeado = loginS.estaLogeado();
  }

  ngOnInit(): void {
  }

}
