

let funcionAlCuadradoFlecha = (numero:number, parametroxdefecto:string="prueba", parametroopcional?:string) => {
    return `El Cuadrado del número es ${numero*numero} ${parametroxdefecto}, opcional = ${parametroopcional}`;
}

console.log(funcionAlCuadradoFlecha(3));
console.log(funcionAlCuadradoFlecha(3, 'hola'));
console.log(funcionAlCuadradoFlecha(3, 'hola', 'casa'));
