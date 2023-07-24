import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({

  exports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  
})
export class AppMaterialModule { }
