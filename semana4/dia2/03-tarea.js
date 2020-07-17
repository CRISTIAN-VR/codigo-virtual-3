// Cuanto dispone para el regalo
// Tarjeta, <= $ 10.00 
// Chocolates, $ 11.00  <= $ 100.00
// Flores, $ 101.00 <= $ 250.00
// Anillo, > $ 250.00


let monto = +prompt("Ingrese cantidad de dinero para regalo");
let regalo;

if (monto <= 10 && monto > 0) {
    regalo = "Tarjeta";
} else {
    if (monto <= 100 && monto > 10) {
        regalo = "Chocolate";
    } else {
        if (monto <= 250 && monto > 100 ) {
            regalo = "Flores";
        } else {
            if (monto >= 251) {
                regalo = "Anillo";
            } else {
                regalo = "Ingrese bien el valor";
            }      }
    }
}

console.log(`A usted le alcanza para: ${regalo}`);


