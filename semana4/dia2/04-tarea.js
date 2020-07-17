// Las dos primeras horas a $ 5.00 c/u.
// Las siguientes tres a $ 4.00 c/u.
// Las cinco siguientes a $ 3.00 c/u.
// Después de diez horas $ 2.00 c/u.

let horas = +prompt("Ingrese cantidad de horas de estacionamiento:")
let importe = 0;
let hh = 2;
let hhh = 3;
let hhhh = 5;
let hhhhh = 10;

        if (horas <= 2 && horas > 0) {
            importe = 5*horas;
        } else {
            if (horas <= 5 && horas > 2) {
                importe = 4*horas;
            } else {
                if (horas <= 10 && horas > 5) {
                    importe= 3*horas;
                } else {
                    if (horas > 10) {
                        importe = 2*horas;
                    } else {
                        console.log("Ingrese correctamente");
                    }
                }
            }
        }

        console.log(`El importe por el servicio de estacionamiento es $ ${importe}`);
