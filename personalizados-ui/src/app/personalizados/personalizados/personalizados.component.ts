import { Component, OnInit } from '@angular/core';
import { Personalizado } from '../model/personalizado';
import { PersonalizadosService } from '../services/personalizados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.scss']
})
export class PersonalizadosComponent implements OnInit{

  personalizados: Observable <Personalizado[]>;
  displayedColumns = ['nome', 'categoria'];
  
 // personalizadosService:PersonalizadosService
  
  constructor(private personalizadosService:PersonalizadosService){

    //this.personalizados = [];
    //this.personalizadosService = new PersonalizadosService();
    this.personalizados = this.personalizadosService.list();

  }

  ngOnInit(): void {
    
  }


}
