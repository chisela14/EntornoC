var funcionAlCuadradoFlecha = function (numero, parametroxdefecto, parametroopcional) {
    if (parametroxdefecto === void 0) { parametroxdefecto = "prueba"; }
    return "El Cuadrado del n\u00FAmero es ".concat(numero * numero, " ").concat(parametroxdefecto, ", opcional = ").concat(parametroopcional);
};
console.log(funcionAlCuadradoFlecha(3));
console.log(funcionAlCuadradoFlecha(3, 'hola'));
console.log(funcionAlCuadradoFlecha(3, 'hola', 'casa'));
