import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Personalizado } from '../model/personalizado';
<<<<<<< HEAD
=======
import { delay, first, tap } from 'rxjs';
>>>>>>> develop


@Injectable({
  providedIn: 'root'
})
export class PersonalizadosService {

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) { }

  list(): Personalizado[] {
    return[
      {_id: '1', nome: 'Tags Minnie', categoria: 'Personalizados Impressos'},
    {_id: '2', nome: 'Toalhinhas bordadas com nome e desenho', categoria: 'Bordado Manual'}
    ]
=======
  private readonly API = '/assets/personalizados.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Personalizado[]>(this.API).
    pipe(
      first(),
      delay(5000),
      tap(personalizados => console.log(personalizados))
    );
>>>>>>> develop
  }

}
