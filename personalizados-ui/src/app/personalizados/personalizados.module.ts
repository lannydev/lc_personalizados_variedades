import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadosRoutingModule } from './personalizados-routing.module';
import { PersonalizadosComponent } from './personalizados/personalizados.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PersonalizadosRoutingModule,
    AppMaterialModule,
  ]
})
export class PersonalizadosModule { }
