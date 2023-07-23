import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizadosComponent } from './personalizados/personalizados.component';

const routes: Routes = [
  { path: '', component: PersonalizadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizadosRoutingModule { }
