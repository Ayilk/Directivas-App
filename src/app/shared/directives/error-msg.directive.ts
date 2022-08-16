import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string ='red';
  @Input() mensaje: string = 'Este campo es necesario';

  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('constructor directive');
    //console.log(el);

    this.htmlElement = el;

   }

   ngOnChanges(changes: SimpleChanges): void {
     console.log(changes)
     //En los changes siempre recibimos el valor acutal del ultimo cambio del input
    //Cuando solo cambia un  input, solo me notifica de los cambios
    //Lo que tendriamos que hacer es evaluar si en los changes existe el mensaje
    //
    if( changes['mensaje']){
      const mensaje = changes['mensaje'].currentValue;
      console.log(mensaje)
 
      this.htmlElement.nativeElement.innerText = this.mensaje
    }

    if( changes['color']){
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
   }

   ngOnInit(): void {
     //console.log('NgOnInit directiva');
     this.setColor();
     this.setMensaje();
   }

   setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');

   }

   setMensaje():void{
    this.htmlElement.nativeElement.innerText = this.mensaje
   }

}
