import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.componente';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { CidadesModule } from './cidades/cidades.module';

@NgModule({
  declarations: [
    AppComponent,

    HelloComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    FuncionariosModule,
    CidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
