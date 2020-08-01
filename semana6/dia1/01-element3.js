let btnTitulo1 = document.querySelector("#btnTitulo1");
let btnTitulo2 = document.querySelector("#btnTitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas = document.getElementById("SelectPeliculas");
let btnSelect = document.getElementById("btnSelect");

btnTitulo1.onclick = () => {
    /**
     * elemento innertext => Settea el contenido de una etiqueta 
     * ojo, se debe consederar solo el contenido a nivel 
     * de texto y no de html
     */

     h1.innerText = "Nuevo <strong>titulo</strong> 1";
};

btnTitulo2.onclick () => {
    /**
     * elemento.ennerhtml => settea el conmtenido de una etiqueta
     * a nivel de texto y tambien la etiqueta html
     */

     h1.innerHTML ="Nuevo <strong>título</strong> 2";
};

const llenarSelect = () => {
    let contenido ="";
    peliculas.forEach((objPelicula,i) => {
        contenido = contenido + `<option value="${objPelicula.id}">${objPelicula.title}</option>`;

    });
    selectPeliculas.innerHTML = contenido;

};

btnSelect.onclick = () => {
    llenarSelect();

};

