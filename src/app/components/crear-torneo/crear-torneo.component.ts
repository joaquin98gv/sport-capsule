import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.scss']
})
export class CrearTorneoComponent implements OnInit {

  tipos: any[] = [{Id: 1, Nombre: 'Champions'}, {Id: 2, Nombre: 'Liga'}, {Id: 3, Nombre: 'Mundial'}];
  juegos: any[] = [{Id: 1, Nombre: 'Fifa 20'}, {Id: 2, Nombre: 'Fifa 19'}, {Id: 3, Nombre: 'Fifa 18'}];
  constructor() { }

  ngOnInit(): void {
  }

}
