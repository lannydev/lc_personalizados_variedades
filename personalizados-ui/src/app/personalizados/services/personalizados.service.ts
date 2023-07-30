import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Personalizado } from '../model/personalizado';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonalizadosService {

  private readonly API = '/assets/personalizados.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Personalizado[]>(this.API).
    pipe(
      first(),
      delay(5000),
      tap(personalizados => console.log(personalizados))
    );
  }

}
