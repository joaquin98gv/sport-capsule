import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrearTorneoComponent } from '../../crear-torneo/crear-torneo.component';
import { UnirseTorneoComponent } from '../../unirse-torneo/unirse-torneo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logeado = false;
  crearTorneo = false;
  unirseTorneo = false;
  constructor(  private loginS: LoginService,
                public route: Router,
                private actRoute: ActivatedRoute,
                public dialog: MatDialog  ) {
    this.logeado = loginS.estaLogeado();
    if (this.logeado) {
      this.actRoute.queryParams.subscribe((x: any) => {
        this.crearTorneo = x.crearTorneo != null ? true : false;
        this.unirseTorneo = x.unirseTorneo != null ? true : false;
      });
    }
  }

  ngOnInit(): void {
    if (this.crearTorneo) {
      const dialogRef = this.dialog.open(CrearTorneoComponent, {
        width: '70%',
        // data: {name: this.name, animal: this.animal}
      });
    } else if (this.unirseTorneo) {
      const dialogRef = this.dialog.open(UnirseTorneoComponent, {
        width: '70%',
        // data: {name: this.name, animal: this.animal}
      });
    }
  }

  btnCrearTorneo(): void {
    localStorage.setItem('login_sport_capsule', 'asd');
    this.route.navigateByUrl('?crearTorneo=true');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  btnUnirseTorneo(): void {
    localStorage.setItem('login_sport_capsule', 'asd');
    this.route.navigateByUrl('?unirseTorneo=true');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

}
