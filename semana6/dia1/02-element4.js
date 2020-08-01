let list = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");



btnGenerar.onclick = () => {

    /**
     * document.crateElement("etiqueta_del_elemento")
     * retorna un elemento HTML que aun no esta en el DOM
     * IMAGINAMOS QUE DICHO ELEMENTO ESTA EN EL LIMBO 
     */
    let liTemporal = document.createElement("li");
    let numeroAleatorio = (math.random() * (45 - 1)+ 1).toFixed(0);
    //liTemporal.innerText = (Math.random() * (45 - 1) + 1).toFixed(0);
    liTemporal.innerText = numeroAleatorio;
    /**
     * elemento.setattribute(
     * 
     * 
     */
    liTemporal.setAttribute("class", "lista-item");
    liTemporal.onclick =() => {
            console.log(`Uy! alguien esta haciendo click en ${NumeroAleatorio}`);
    };









    /**
     * elemento appendchild(elemento) agrega como un hijo final al elemento
     * recibido por parametros
     * 
     * elemento.before(elemento), analogamente, inserta un hijo al inicio de los elementos hijo
     */

    lista.appendChild(liTemporal);
};

/**
 * Reto:
 * Permitir como maximo 7 numeros de loteria
 * validar q si un numero se repite, salga otro
 * hint: usar un arreglo para guardar los numeros y sacar la cantidad de numeros
 */