import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {

  submit(event: NgForm) {
    console.log(event.form.value.nome)
  }

}
