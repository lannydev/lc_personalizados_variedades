import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadosRoutingModule } from './personalizados-routing.module';
import { PersonalizadosComponent } from './personalizados/personalizados.component';


@NgModule({
  declarations: [
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PersonalizadosRoutingModule
  ]
})
export class PersonalizadosModule { }
