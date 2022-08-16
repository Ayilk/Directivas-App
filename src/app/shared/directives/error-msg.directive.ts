import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  //Algo que podemos hacer para hacer los cambios dinamicos sin usar en ngOnChanges
  //es usar el comando set
  private _color: string = 'red';
  private _mensaje: string = "Este campo es requerido"

  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color(valor: string){
   // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }
  //Cada vez que el color cambie, cambiamos el valor del mismo, pero no estamos manteniendo
  //la propiedad color, simplemente la recibimos y ejecutamos el codigo.
  //Es como si tuvieramos un metodo, pero si necesitaramos incluso dentro de la misma directiva saber cual es el valor establecido
  //tendriamos que crearnos alguna propiedad privada

  @Input() set mensaje( valor: string ){
   // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }

  // @Input() color: string ='red';
  //@Input() mensaje: string = 'Este campo es necesario';



  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('constructor directive');
    //console.log(el);

    this.htmlElement = el;

   }

   ngOnChanges(changes: SimpleChanges): void {
     //console.log(changes)

     //En los changes siempre recibimos el valor acutal del ultimo cambio del input
    //Cuando solo cambia un  input, solo me notifica de los cambios
    //Lo que tendriamos que hacer es evaluar si en los changes existe el mensaje
    
    // if( changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    //   console.log(mensaje)
 
    //   this.htmlElement.nativeElement.innerText = this.mensaje
    // }

    // if( changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
   }

   ngOnInit(): void {
     //console.log('NgOnInit directiva');
     this.setEstilo();
     this.setColor();
     this.setMensaje();
   }

   setEstilo():void{

     this.htmlElement.nativeElement.classList.add('form-text');
   }

   setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;

   }

   setMensaje():void{
    this.htmlElement.nativeElement.innerText = this._mensaje
   }

}
