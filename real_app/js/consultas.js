
//limpiar los datos que vienene de data.js
//pasarlos de { "id1":{...}, "id2":{...}, "idn":{...} } a [{producto1},{producto2},{productoN}]
var datos = Object.values(data);

//elementos
var lista_productos = document.getElementById("lista_productos");
var busqueda_txt = document.getElementById("busqueda_txt");
var busqueda_btn = document.getElementById("busqueda_btn");



//módelo de carta
let card = (item) => `

<div class="col">
    <div class="card">
        <img width="100%" height="400px" src="${item.urlImagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <h6 class="card-title">${item.precio} COP</h6>
            <p class="card-text">${item.descripcion}.</p>
        </div>
    </div>
</div>


`


//funciones de busqueda y filtrado
function buscarPorNombre(nombre) {
    let res = datos.filter(item => item.nombre.toString().toLowerCase().trim().includes(nombre.toString().toLowerCase().trim()))
    renderOnTime(res);
}
function buscarPorIdentificador(identificador) {
    let res = datos.filter(item => item.identificador.toString().trim().includes(identificador.toString().trim()))
    renderOnTime(res);
}


// funciones de renders
function renderOnTime(res) {
    if (lista_productos.hasChildNodes()) {

        lista_productos.innerHTML = '';
    }
    res.forEach(item => {

        lista_productos.innerHTML = lista_productos.innerHTML + card(item)
    });
}
function renderAll() {
    if (lista_productos.hasChildNodes()) {

        lista_productos.innerHTML = '';
    }
    datos.forEach(item => {

        lista_productos.innerHTML = lista_productos.innerHTML + card(item)
    });
}
renderAll();



busqueda_txt.oninput = function () {
    buscarPorNombre(this.value)
}
busqueda_btn.onclick = function () {
    buscarPorNombre(busqueda_txt.value)
}


