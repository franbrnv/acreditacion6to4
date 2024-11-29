function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}
let precio = parseFloat(prompt("Ingresa el precio original:"));
let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
let precioFinal = calcularPrecioConDescuento(precio, descuento);
console.log("El precio final es " + precioFinal);
