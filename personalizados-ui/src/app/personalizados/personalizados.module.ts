import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadosRoutingModule } from './personalizados-routing.module';
import { PersonalizadosComponent } from './personalizados/personalizados.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PersonalizadosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PersonalizadosModule { }
