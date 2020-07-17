let poliza = prompt("Ingrese tipo de poliza que desea; A: Cobertura amplia o B: Cobertura daños a 3ros)");
let edad = +prompt("Ingrese edad");
let enfer = prompt("Sufre de enfermedades cardiacas o diabetes (si/no)");
let usa = prompt("Usa lentes (si/no)");
let x = 0;
let y = 0;

if (poliza === "a" || poliza === "A"){
if (enfer === "si" || usa === "si" ){
        x = 1200 + (1200 * 0.5);
        console.log(`El total de su poliza le cuesta: ${x}`);
} else {
            x = 1200;
            console.log(`El total de su poliza le cuesta: ${x}`);
         
} else {
        if (edad > 40){
        x = 1200 + (1200 * 0.20);
        console.log(`El total de su poliza le cuesta: ${x}`);
} else {
        x = 1200 + (1200 * 0.10);
        console.log(`El total de su poliza le cuesta: ${x}`);
} else {
if (enfer === "si" || usa === "si" ){
        y = 950 + (950 * 0.5);
        console.log(`El total de su poliza le cuesta: ${y}`);
} else {
            y = 950;
            console.log(`El total de su poliza le cuesta: ${y}`);
} else {
if (edad > 40){
        y = 950 + (950 * 0.20);
        console.log(`El total de su poliza le cuesta: ${y}`);
} else {
        x = 950 + (950 * 0.10);
        console.log(`El total de su poliza le cuesta: ${y}`);
        }
           