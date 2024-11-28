import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome!: string;
  profissao!: string;
}

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {

  cliente = new Cliente();

  profissoes = ['Dev Java', 'Dev Angular', 'Dev Node']

  submit(form: NgForm) {
    console.log(form)

    this.cliente.nome = form.value.nome;
    this.cliente.profissao = form.value.profissao;
  }

}
