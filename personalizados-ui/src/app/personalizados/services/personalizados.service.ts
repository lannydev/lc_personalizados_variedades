import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Personalizado } from '../model/personalizado';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonalizadosService {

  private readonly API = '/assets/personalizados.json'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Personalizado[]>(this.API).
    pipe(
      tap(personalizados => console.log(personalizados))
    );
  }

}
