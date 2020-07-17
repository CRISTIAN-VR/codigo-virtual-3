//switch

console.log(`Elegir opcion
1. login
2. ver factura
3.ver reportes
`);

let rpta = +prompt("Ingresar opcion:");

switch (rpta) {
    case 1: 
    console.log("Usted eligio iniciar cesion");
    // BREAK sirve para romper la ejecucion del codigo restante en la estructura
        break;
    case 2:
        console.log("Usted desea ver las facturas");
        break;
    case 3:
        console.log("Usted desea ver reportes");    
        break;
    default:
        console.log("Ingresde una opcion valida");
}
console.log("Fin del Programa");