import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string = 'transparent';

  constructor(
    private elemenRef: ElementRef,
    private rendered: Renderer2
  ) {
  }

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
    //this.rendered.setStyle(this.elemenRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
    //this.rendered.setStyle(this.elemenRef.nativeElement, 'background-color', 'transparent');
  }

}
