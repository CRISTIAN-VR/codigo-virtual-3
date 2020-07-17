// Bono por antiguedad, ant > 2 años y ant < 5 años => 20% del sueldo
// Bono por antiguedad, ant >= 5 años               => 30% del sueldo

// Bono por sueldo, sueldo < 1000                   => 25% del sueldo
// Bono por sueldo, sueldo >= 1000 y sueldo <= 3500 => 15% del sueldo
// Bono por sueldo, sueldo > 3500                   => 10% del sueldo
// Se considera el mayor

let ant = +prompt("Ingrese años en la empresa");
        let sueldo = +prompt("Ingrese remuneración");
        let x = 0;
        let y = 0;
     
 if (ant > 2 && ant > 5) {
     x = 0.20*sueldo;
} else {
     x = 0.30*sueldo;
 }    
if (sueldo < 1000) {
     y = 0.25*sueldo;
 } else {
     if (sueldo >= 1000 && sueldo <= 3500) {
    y = 0.15*sueldo;
} else {
     y = 0.10*sueldo;
    }
 }

if (x > y) {
 console.log(`el bono es :${x}`);
} else {
  console.log(`el bono es :${y}`);
 }
