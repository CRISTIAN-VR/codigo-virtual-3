let semaforo = true;
let notas = [];
let suma = 0;
do {
    let nota = +prompt( "ingrese nota");
    if (nota === -1){
        semaforo = false;
    } else{
        nota.push(nota);
        suma += nota;
    }
    } while 

}