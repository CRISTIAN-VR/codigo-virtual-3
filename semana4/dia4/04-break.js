let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"]
let edades = [20, 15, 75, 68, 45, 25];

let buscar = prompt ("ingrese el nombre a buscar");

    
for (let i = 0; i < nombres.length; i++){ 
    console.log(`i = ${i} `);
    
    if (nombres[i] === buscar) {
            console.log(`Encontrado: ${buscar}`);
            console.log(`Edad: ${edades[i]}`);
            break
        
    }
}