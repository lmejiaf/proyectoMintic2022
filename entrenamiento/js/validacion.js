
// aqui en esta sección obtenemos los campos de texto
var texto = document.getElementById("mensaje");


// aqui obtenemos el botón
var boton = document.getElementById("boton_mensaje");

//aqui obtenemos la lista
var lista= document.getElementById("lista");



// funciones
// Ahondar en el tema de expresiones regulares

// 1. validar que se contenga sólo números
function validarSoloNumeros(){
    
    let expresion= new RegExp("[0-9]")

    if(!expresion.test(texto.value)){
        texto.style.borderColor="red";
    }

}
// 1. validar que se contenga sólo texto
function validarSoloLetras(){
    
    let expresion= new RegExp("^[0-9]")

    if(expresion.test(texto.value)){
        alert("Solamente hay texto")
    }else{
        alert("Hay una o más numeros")
    }

}

//darle una vuelta al campo de texto
function darVuelta(){
    texto.style.transform= "rotate(7deg)";
}

//agregar un item a una lista
function agregarItem(){

    lista.innerHTML= lista.innerHTML + `
    <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="esta imagen no se puede visualizar">
        <div class="card-body">
            <p class="card-text">${texto.value}</p>
        </div>
    </div>
    `


}

//enlace de funciones a boton
boton.addEventListener("click", agregarItem)













// boton.addEventListener("click", mostrarDatos);
// texto.addEventListener("click", mostrarDatos);


// function mostrarDatos(){
//     // console.log(texto.value);
//     alert("esto es lo escrito: "+texto.value)
// }
