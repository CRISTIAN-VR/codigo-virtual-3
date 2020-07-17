let ant = +prompt("Ingrese años de antiguedad (si tiene menos de 1 año, no ingrese nada)");
let x = 0;
let y = 0;

switch (ant) {
    case 1: 
    console.log("Usted tiene un bono de $ 100.00");
    // BREAK sirve para romper la ejecucion del codigo restante en la estructura
        break;
    case 2:
        console.log("Usted tiene un bono de $ 200.00");
        break;
    case 3:
        console.log("Usted tiene un bono de $ 300.00");    
        break;
    case 4:
        console.log("Usted tiene un bono de $ 400.00");    
        break;
    case 5:
        console.log("Usted tiene un bono de $ 500.00");    
        break;
    default:
        console.log("Usted tiene un bono de $ 1000.00");
}
console.log("Fin del Programa");
