import { Component } from "@angular/core";

@Component({ //autocompletado
    selector: 'app-contador', //app porque lo has creado tu, después nombre de lo que representa
    templateUrl: './contador.component.html'
})

export class Contador{//ContadorComponent para seguir el estandar
    title:string = 'Contador';
  contador:number = 10;
  base:number = 5;


  // incrementar(num?:number){
  //   if(num){
  //     this.contador += num;
  //   }else{
  //     this.contador += 1;
  //   }
  // }
  // disminuir(num?:number){
  //   if(num){
  //     this.contador -= num;
  //   }else{
  //     this.contador -= 1;
  //   }
    
  // }
  agregar(value:number){
    this.contador += value;
  }
}