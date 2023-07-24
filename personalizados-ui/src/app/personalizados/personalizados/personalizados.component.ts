import { Component, OnInit } from '@angular/core';
import { Personalizado } from '../model/personalizado';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.scss']
})
export class PersonalizadosComponent implements OnInit{

  personalizados: Personalizado[] = [
    {_id: '1', nome: 'Tags Minnie', categoria: 'Personalizados Impressos'},
    {_id: '2', nome: 'Toalhinhas bordadas com nome e desenho', categoria: 'Bordado Manual'}
  ];
  displayedColumns = ['nome', 'categoria'];
  
  constructor(){

    //this.personalizados = [];

  }

  ngOnInit(): void {
    
  }


}
