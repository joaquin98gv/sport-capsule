import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Jugador {
  id: number;
  name: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  pts: number;
  gf: number;

}

const lTorneo: Jugador[] = [
  {id: 1, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 2, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 3, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 4, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 5, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 6, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 7, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 8, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0},
  {id: 9, name: 'Joaquin Gonzalez', pj: 0, pg: 0, pe: 0, pp: 0, pts: 0, gf: 0}
];

@Component({
  selector: 'app-detalle-resultado-torneo',
  templateUrl: './detalle-resultado-torneo.component.html',
  styleUrls: ['./detalle-resultado-torneo.component.scss']
})
export class DetalleResultadoTorneoComponent {

  displayedColumns: string[] = ['id', 'pj', 'pg', 'pe', 'pp', 'pts', 'gf'];
  dataSource: MatTableDataSource<Jugador>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  idTorneo: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DetalleResultadoTorneoComponent>) {
    this.idTorneo = data.idTorneo;
    console.log(this.idTorneo);
    this.dataSource = new MatTableDataSource(lTorneo);
  }
}
