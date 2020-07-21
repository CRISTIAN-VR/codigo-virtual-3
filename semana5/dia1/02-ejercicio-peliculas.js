/**
 *
 *Retorna un objeto pelicula 
 *que el usuario busca segun el nombre
 *en caso conmtrario, se retorna null
 *@param {string} nombre
 */
const getPeliculasByname = (nombre) => {
    for(let i= 0; i<data.peliculas.length; i++) {
        if (data.peliculas[i].title === nombre){
            //return => retorna una respuesta de la funcion 
            // pero la lista del for automaticamente
            return data.peliculas[i];
        }
    }
    return null;
};
let peliculaEncontrata = getPeliculasByname("atrapa ese email");
console.log(peliculaEncontrada);

//2
/**
 * Funcion que retorna una lista de peliculas q tienen
 * menos de 200 votos (en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retornar un arreglo vacion.
 */
const getMenosVotadas = () =>{
        let ArrayPeliculas =[];
        for (let i = 0; i < data.peliculas.length; i++) {
            if (data.peliculas[i].vote_count<200) {
                ArrayPeliculas.push(data.peliculas[i].title);
                
            }
            
        }
        return ArrayPeliculas;
    }
    let lasMenosVotadas=getMenosVotadas();
    console.log(lasMenosVotadas);

//3
/**
 * Funciones q retorna el numeri ( la cantidad) de peliculas cuyos lenguajes originales 
 * no sean en ingles
 * hint: ver el campo original_ language
 */
const getPeliculasExtrangeras =() => {

}
//4



