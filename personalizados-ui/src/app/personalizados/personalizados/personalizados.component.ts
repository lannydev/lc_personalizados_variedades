import { Component, OnInit } from '@angular/core';
import { Personalizado } from '../model/personalizado';
import { PersonalizadosService } from '../services/personalizados.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.scss']
})
export class PersonalizadosComponent implements OnInit{

  personalizados$: Observable <Personalizado[]>;
  displayedColumns = ['nome', 'categoria'];
  
 // personalizadosService:PersonalizadosService
  
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
  }

  ngOnInit(): void {
    
  }


}
