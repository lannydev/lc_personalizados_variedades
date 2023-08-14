import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadosRoutingModule } from './personalizados-routing.module';
import { PersonalizadosComponent } from './personalizados/personalizados.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
<<<<<<< HEAD
=======
import { SharedModule } from '../shared/shared.module';
>>>>>>> develop



@NgModule({
  declarations: [
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PersonalizadosRoutingModule,
<<<<<<< HEAD
    AppMaterialModule
=======
    AppMaterialModule,
    SharedModule
>>>>>>> develop
  ]
})
export class PersonalizadosModule { }
