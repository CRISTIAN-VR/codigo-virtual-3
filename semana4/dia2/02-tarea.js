// Determinar el sueldo semanale en base a las horas trabajadas (ht)
// y pago por hora (ph), considerando q despues de las 40 h se 
// considera exedente y se paga el doble

let ht = +prompt("Ingrese horas trabajadas de la semana");
let ph = +prompt("Ingrese el pago por hora en s/");
let x = 0;
let y = 0;

if (ht > 40) {
        x = ht - 40;
        y = (ph * 40) + (x * (ph * 2));
        console.log(`Tiene: ${x} horas extras y su pago semanal es s/ ${y}`);
    } else {
        y= ht * ph;
        console.log(`No tiene horas extras en la semana y su pago semanal es: ${y}`);
    }


  
