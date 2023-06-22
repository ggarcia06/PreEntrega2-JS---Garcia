
// funciones
const calcularImpuestos = (total) => {return total * 1.75}

const precioConDescuento = (total, descuento) => {return total * descuento};

function Persona(nombre, apellido, email) {
    this.nombre = prompt("Ingrese su nombre");
    this.apellido = prompt("Ingrese su apellido");
    this.email = prompt("Ingrese su e-mail");
} 

//variables
let nombre = "nombre"
let apellido = "apellido";
let email = "email";

// declaracion de un array para obtener datos de los usuarios y ejecucion del simulador 
const usuarios = [];
for(let i = 0; i < 3; i++){
    usuarios.push(new Persona(i));


alert("Bienvenido, el siguiente simulador le ayudara a cotizar sus proximas vacasiones");


let numeroDeNoches = parseInt(prompt("Ingrese el numero de noches. (minimo 4, maximo 10)"));
usuarios[i].numeroDeNoches = numeroDeNoches;
let totalSinImpuestos = 0;
let resultado = 0


if (numeroDeNoches >= 4 && numeroDeNoches <= 10) {
    let opcion = parseInt(prompt("Seleccione una opcion para el destino deseado: 1- Miami, USA / 2- Cancun, Mexico / 3- La Habana, Cuba / 4- Lima, Peru / 5- SALIR "));
    const cerrarAplicacion = 5;
    usuarios[i].opcion = opcion;

    while (opcion != 5) {


        switch (opcion) {
            case 1:
                totalSinImpuestos = 132000 * numeroDeNoches;
                resultado = calcularImpuestos(totalSinImpuestos);
                usuarios[i].resultado = resultado;
                alert("El valor del paquete con impuestos incluidos es de $" + resultado + " ARG.");
                let codigoDescuento = prompt("Si tiene codigo de descuento ingreselo, ESC para salir")
                if(codigoDescuento == "MIAMI365"){
                    alert("Con el codigo ingresado usted obtiene un %15 de descuento, el valor de su paquete seria $" + precioConDescuento(resultado, 0.75) + " ARG");
                } else if(codigoDescuento == "ESC"){
                    break;
                }else {
                    alert("El codigo no es valido");
                }
                
                break;
            case 2:
                totalSinImpuestos = 106500 * numeroDeNoches;
                resultado = calcularImpuestos(totalSinImpuestos);
                usuarios[i].resultado = resultado;
                alert("El valor del paquete con impuestos incluidos es de $" + resultado + " ARG.");
                break;
            case 3:
                totalSinImpuestos = 124000 * numeroDeNoches;
                resultado = calcularImpuestos(totalSinImpuestos);
                usuarios[i].resultado = resultado;
                alert("El valor del paquete con impuestos incluidos es de $" + resultado + " ARG.");
                let codigoDescuento3 = prompt("Si tiene codigo de descuento ingreselo, ESC para salir")
                if(codigoDescuento3 == "HABANA365"){
                    alert("Con el codigo ingresado usted obtiene un %15 de descuento, el valor de su paquete seria $" + precioConDescuento(resultado, 0.8) + " ARG");
                } else if(codigoDescuento3 == "ESC"){
                    break;
                }else {
                    alert("El codigo no es valido");
                }
                break;
            case 4:
                totalSinImpuestos = 102300 * numeroDeNoches;
                resultado = calcularImpuestos(totalSinImpuestos);
                usuarios[i].resultado = resultado;
                alert("El valor del paquete con impuestos incluidos es de $" + resultado + " ARG.");
                break;
            default:
                alert("ingreso mal la opcion");
                break;
        }
        alert("Gracias por su consulta " + usuarios[i].nombre + ". Estaremos enviando un correo con el valor del destino seleccionado al correo: " + usuarios[i].email + " .Regrese pronto");
        opcion = prompt("escriba 5 para salir");
    }
} else {
    alert("El número ingresado no es valido, los paquetes de viaje se arman a partir de 4 noches hasta 10 noches inclusive, ingrese nuevamente al simulador")
}

}
console.log(usuarios);


//filtrado de la lista de usuarios por seleccion de destino
const usuariosDestinoMiami = usuarios.filter((el) => el.opcion == 1);
const usuariosDestinoCancun = usuarios.filter((el) => el.opcion == 2);
const usuariosDestinoHabana = usuarios.filter((el) => el.opcion == 3);
const usuariosDestinoLima = usuarios.filter((el) => el.opcion == 4);

console.log(usuariosDestinoMiami);
console.log(usuariosDestinoCancun);
console.log(usuariosDestinoHabana);
console.log(usuariosDestinoLima);
