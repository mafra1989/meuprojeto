import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios: any = [];

  aoAdicionar(event: any) {
    this.funcionarios.push(event);
  }

}
