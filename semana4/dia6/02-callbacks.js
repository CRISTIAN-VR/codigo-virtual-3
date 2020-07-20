
const buscarPorDni = (dni, callback) => {
    // conecto a la BD
    // hago la consulta del dni
    // RETORNO LA INFORMACION DE LA PERSONA
    let nombreEncontrado = "-----";
    setTimeout(function () {
      console.log("Buscando en la base de datos");
      nombreEncontrado = "Jorge Garnica";
      callback(nombreEncontrado);
    }, 2000);
  };
  
  buscarPorDni("45875212", (nombre) => {
    console.log(nombre);
  });