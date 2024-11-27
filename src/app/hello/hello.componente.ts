import { Component } from "@angular/core";

@Component({
    selector: 'app-hello',
    template: `
        <p>
            Hello {{nome}}!!
        </p>
        `
})
export class HelloComponent {
    //teste
    nome = 'Evandro';
}
