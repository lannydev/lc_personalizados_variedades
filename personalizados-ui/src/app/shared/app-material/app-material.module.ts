import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
<<<<<<< HEAD
=======
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


>>>>>>> develop



@NgModule({

  exports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
<<<<<<< HEAD
    MatToolbarModule
=======
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule
>>>>>>> develop
  ],
  
})
export class AppMaterialModule { }
