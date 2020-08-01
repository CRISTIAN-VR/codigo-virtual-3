let btnLight = document.getElementById("btnLight");
let btndarks = document.getElementById("btndarks");
let btnToggle = document.getElementById("btnToggle");
let seccion1 = document.querySelector(".seccion1");
let boton = document.querySelector("#btn");
//evento Click
btnLight.onclick = () => {
    //evaluar si tiene la clase
    if(seccion1.classList.contains("sombra-darks") === true){
        seccion1.classList.remove("sombra-darks");
    }
    seccion1.classList.add("sombra-light");
}
btndarks.onclick = () => {
    if(seccion1.classList.contains("sombra-light") === true){
        seccion1.classList.remove("sombra-light");
    }
    seccion1.classList.add("sombra-darks");
}
btnToggle.onclick = () => {
    if(seccion1.classList.contains("sombra-darks") === true){
        seccion1.classList.remove("sombra-darks");
        seccion1.classList.add("sombra-light");
    }
    else if(seccion1.classList.contains("sombra-light") === true){
        seccion1.classList.remove("sombra-light");
        seccion1.classList.add("sombra-darks");
    }else {
        seccion1.classList.add("sombra-light");
    }
}
boton.onclick = () => {
    if(btn.classList.contains("btnActivo") === true){
        btn.classList.remove("btnActivo");
        btn.classList.add("btnNormal");
    }else{
        btn.classList.add("btnActivo");
    }
}