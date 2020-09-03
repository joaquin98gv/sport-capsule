import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { CrearTorneoComponent } from '../../crear-torneo/crear-torneo.component';
import { UnirseTorneoComponent } from '../../unirse-torneo/unirse-torneo.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  logeado = false;
  constructor(private loginS: LoginService, public dialog: MatDialog) {
    this.logeado = loginS.estaLogeado();
  }

  ngOnInit(): void {
  }

  mouseenter(): void {
    if (!this.isExpanded) {
      // this.isShowing = true;
    }
  }

  mouseleave(): void {
    if (!this.isExpanded) {
      // this.isShowing = false;
    }
  }

  crearTorneoDialog(): void {
    const dialogRef = this.dialog.open(CrearTorneoComponent, {
      width: '70%',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  unirseTorneoDialog(): void {
    const dialogRef = this.dialog.open(UnirseTorneoComponent, {
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
