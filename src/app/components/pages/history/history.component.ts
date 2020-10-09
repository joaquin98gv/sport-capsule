import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetalleResultadoTorneoComponent } from '../../detalle-resultado-torneo/detalle-resultado-torneo.component';
export interface Torneo {
  id: number;
  name: string;
  creator: string;
}

const lTorneo: Torneo[] = [
  {id: 1, name: 'Primero torneo', creator: 'Joaquin Gonzalez'},
  {id: 2, name: 'Segundo torneo', creator: 'Joaquin Gonzalez'},
  {id: 3, name: 'Tercer torneo', creator: 'Joaquin Gonzalez'},
  {id: 4, name: 'Cuarto torneo', creator: 'Joaquin Gonzalez'},
  {id: 5, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 6, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 7, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 8, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 9, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 10, name: 'Otro torneo', creator: 'Joaquin Gonzalez'},
  {id: 11, name: 'Otro torneo', creator: 'Joaquin Gonzalez'}
];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'name', 'creator', 'option'];
  dataSource: MatTableDataSource<Torneo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog) {

    this.dataSource = new MatTableDataSource(lTorneo);
  }

  ngAfterViewInit(): any {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  verDetalleResultado(idTorneo: number): void {
    const dialogRef = this.dialog.open(DetalleResultadoTorneoComponent, {
      width: '70%',
      data: {idTorneo}
    });
  }

}

