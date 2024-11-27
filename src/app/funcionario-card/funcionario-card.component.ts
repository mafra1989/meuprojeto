import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
  .card-text {
    text-transform: uppercase;
    color: blue;
  }
  `]
})
export class FuncionarioCardComponent {

  @Input('funcionario') f: any = [];

  getEstilosCartao() {
    return {
      //'background-color': 'red',
      backgroundColor: this.f.id % 2 === 0 ? 'lightblue' : 'lightgreen',
      //borderWidth: this.f.id + 'px',
      'border-width.px': this.f.id,
    }
  }

  getClassesCss() {
    return ['badge', 'text-bg-primary'];
  }

  isAdmin() {
    return this.f.nome.startsWith('T');
  }
}
