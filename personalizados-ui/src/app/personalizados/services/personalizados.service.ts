import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Personalizado } from '../model/personalizado';


@Injectable({
  providedIn: 'root'
})
export class PersonalizadosService {

  constructor(private httpClient: HttpClient) { }

  list(): Personalizado[] {
    return[
      {_id: '1', nome: 'Tags Minnie', categoria: 'Personalizados Impressos'},
    {_id: '2', nome: 'Toalhinhas bordadas com nome e desenho', categoria: 'Bordado Manual'}
    ]
  }

}
