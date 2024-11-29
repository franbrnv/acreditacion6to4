let bandas = ["Queen", "TheBeatles", "SuiGeneris", "Invisible", "AC/DC", "LosFronterizos", "Almafuerte", "TanBionica", "V8", "PescadoRabioso"];

console.log("Tercer elemento:", bandas[2]);
console.log("Cuarto elemento:", bandas[3]);
console.log("Séptimo elemento:", bandas[6]);
    
bandas[1] = "PorSuiGieco";
bandas[2] = "LosNocheros";
console.log("Array modificado:", bandas);

bandas.push("LosChalchaleros");
console.log("Array actualizado:", bandas);

console.log("La longitud del array es:", bandas.length);

bandas.sort();
console.log("Array ordenado alfabéticamente:", bandas);

for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);
}
