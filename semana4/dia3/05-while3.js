

// Dado un arreglo de numeros,
// Hallar la cantidad de numeros positivos,
// Hallar la cantidad de numeros negativos,
// Hallar la cantidad de numeros a 0,

let numeros = [12, 25, -9, -8, 0, 0, 28, 7464, -958, 9, -9, 0]
let contador = 0;
let p = 0;
let n = 0;
let cero = 0;


while (contador < numeros.length) {
    if (numeros[contador] > 0) {
        p++;
    }
        else if (numeros[contador] < 0){
            n++;
        
        }
        else {
            cero++;
        }        

    contador++;

}
console.log(`numeros positivos : ${p}`);
console.log(`numeros positivos : ${n}`);
console.log(`numeros positivos : ${cero}`);