import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unirse-torneo',
  templateUrl: './unirse-torneo.component.html',
  styleUrls: ['./unirse-torneo.component.scss']
})
export class UnirseTorneoComponent implements OnInit {

  confirmacion = false;
  constructor() { }

  ngOnInit(): void {
  }

  verificar(): void {
    this.confirmacion = true;
  }

}
