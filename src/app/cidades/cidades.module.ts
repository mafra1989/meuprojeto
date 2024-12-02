import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesService } from './cidades.service';
import { CidadeComponent } from './cidade/cidade.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CidadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CidadeComponent
  ],
  providers: [
    CidadesService
  ]
})
export class CidadesModule { }
