function areaRectangulo(base, altura) {
    return base * altura;
}
let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
let area = areaRectangulo(base, altura);
console.log("El área del rectángulo es " + area);
