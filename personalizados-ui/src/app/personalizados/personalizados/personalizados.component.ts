import { Component, OnInit } from '@angular/core';
import { Personalizado } from '../model/personalizado';
import { PersonalizadosService } from '../services/personalizados.service';
<<<<<<< HEAD
=======
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
>>>>>>> develop

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.scss']
})
export class PersonalizadosComponent implements OnInit{

<<<<<<< HEAD
  personalizados: Personalizado[] = [];
=======
  personalizados$: Observable <Personalizado[]>;
>>>>>>> develop
  displayedColumns = ['nome', 'categoria'];
  
 // personalizadosService:PersonalizadosService
  
<<<<<<< HEAD
  constructor(private personalizadosService:PersonalizadosService){

    //this.personalizados = [];
    //this.personalizadosService = new PersonalizadosService();
    this.personalizados = this.personalizadosService.list();

=======
  constructor(
    private personalizadosService:PersonalizadosService,
    public dialog: MatDialog
    ){

    //this.personalizados = [];
    //this.personalizadosService = new PersonalizadosService();
    this.personalizados$ = this.personalizadosService.list().
    pipe(
      catchError(error => {
        this.onError('Erro ao carregar os personalizados')
        return of([])
      })

    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
>>>>>>> develop
  }

  ngOnInit(): void {
    
  }


}
