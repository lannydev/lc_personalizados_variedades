import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personalizados' },
  {
    path: 'personalizados',
    loadChildren: () => import('./personalizados/personalizados.module').then(m => m.PersonalizadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
