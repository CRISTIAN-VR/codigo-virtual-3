let x = +prompt("Cuanto recibiras en Diciembre?:)");

if (x >= 50000){
    console.log("Usted puede adquirir el plan A");
} else if (x >= 20000 && x < 50000){
    console.log("Usted puede adquirir el plan B");
} else if (x >= 10000 && x < 20000){
    console.log("Usted puede adquirir el plan C");
} else {
    console.log("Usted puede adquirir el plan D");
}
    

