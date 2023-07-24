import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadosRoutingModule } from './personalizados-routing.module';
import { PersonalizadosComponent } from './personalizados/personalizados.component';

import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PersonalizadosRoutingModule,
    MatTableModule
  ]
})
export class PersonalizadosModule { }
