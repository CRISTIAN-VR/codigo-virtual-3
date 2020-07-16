// Hacer un prog q indicque ingresar al usuario
// las 3 primeras letras de un dia de la semana
// y que el programa complete el dia de la semana (lo imprima)

let ingreso = prompt("Ingrese las 3 primeras letras del dia de la semana (min) (MAY)");

if (ingreso==="lun" || ingreso==="LUN"){
    console.log("Lunes");
}else if (ingreso==="mar" || ingreso==="MAR"){
        console.log("Martes");
}else if (ingreso==="mie" || ingreso==="MIE"){
            console.log("Miercoles");
}else if (ingreso==="jue" || ingreso==="JUE"){
                console.log("Jueves");
}else if (ingreso==="vie" || ingreso==="vie"){
                    console.log("Viernes");
}else if (ingreso==="sab" || ingreso==="SAB"){
                        console.log("Sabado");
}else if (ingreso==="dom" || ingreso==="DOM"){
                            console.log("Domingo");
}else {
    console.log("ERROR! Ingresa bien");
}
