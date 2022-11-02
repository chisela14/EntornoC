
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE: { nombre:string, edad:number } = {
  nombre: nombre,
  edad: edad
};

console.log('1.- ' + PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
interface Personaje {
  nombre: string;
  artesMarciales: Array<string>;
}

let batman:Personaje = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
console.log('2.- ' + batman);

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = (a:number, b:number) => {
  return (a + b) * 2
}
console.log('3.- ' +resultadoDoble(2,3));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
  let mensaje:string;
  if(poder){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  return mensaje;
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number;
  altura:number;

  constructor(base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base*this.altura;
  }
}