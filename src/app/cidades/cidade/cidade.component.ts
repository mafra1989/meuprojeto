import { Component, OnInit } from '@angular/core';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  constructor(private cidadesService: CidadesService) { }

  cidades: any = [];

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.cidadesService.consultar()
    .then(cidades => this.cidades = cidades);
  }

  adicionar(nome: any) {
    this.cidadesService.adicionar({nome: nome})
    .then(() => {
      this.consultar();
    });
  }

  excluir(id: any) {
    this.cidadesService.deletar(id)
    .then(() => {
      this.consultar();
    });
  }

  atualizar(cidade: any) {
    this.cidadesService.atualizar(cidade)
    .then(() => {
      alert('Cidade alterada com sucesso!');
    })
    .catch(erro => {
      alert(erro);
    });
  }
}
