import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from '../campo-colorido.directive';



@NgModule({
  declarations: [
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    FormsModule
  ]
})
export class FuncionariosModule { }
