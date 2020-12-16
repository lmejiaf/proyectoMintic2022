
const URL={

    BASE: "https://pokeapi.co/api/v2/",
    POKEMON: "pokemon/",
}


//funciones
async function buscarPorNombre(nombreOrId){


    let response= await fetch(`${URL.BASE}${URL.POKEMON}${nombreOrId}`);

    if (response.ok) {
        let pokemon= response.json();

        pokemon
        .then(data=>{
            
            console.log(data)
            pintarPokemon(data);
        
        
        })
        .catch(err=> console.log(err))
    }



}
async function buscarTodos(inicial, final){


    let pokemons=[];

    for (let index = inicial; index <= final; index++) {
        
        let response= await fetch(`${URL.BASE}${URL.POKEMON}${index}`);

        if (response.ok) {
            let pokemon= response.json();
    
            pokemon
            .then(data=>{
                
                console.log(data)
                pokemons.push(data);
            
            
            })
            .catch(err=> console.log(err))
        }
        
    }



    pintarTodosLosPokemones(pokemons);

}


//elementos
listaPokemons= document.getElementById("listaPokemons");
busqueda_btn= document.getElementById("busqueda_btn");
busqueda_txt= document.getElementById("busqueda_txt");
busqueda_btn_all= document.getElementById("busqueda_btn_all");



//modelos
let pokemonModelo = (pokemon) =>`
    <div class="col">
        <div class="card">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
            </div>
        </div>
    </div>
`

//renders o pintores
function pintarPokemon(pokemon){

    listaPokemons.innerHTML= listaPokemons.innerHTML + pokemonModelo(pokemon);
}
function pintarTodosLosPokemones(lista){
    if(listaPokemons.hasChildNodes()){
        listaPokemons.innerHTML= '';
    }


    lista.forEach(pokemon => {
        pintarPokemon(pokemon);
    });
}


//asignacion de eventos
busqueda_btn.onclick= async function(){
    buscarPorNombre(busqueda_txt.value.trim().toLowerCase());
}
busqueda_btn_all.onclick=async function(){
    buscarTodos(1, 20);
}























// const URL={
//     BASE: "https://pokeapi.co/api/v2/",
//     API: "pokemon/"
// }



// async function findByName(name) {

//     let response= await fetch(`${URL.BASE}${URL.API}${name}`);

//     if (response.ok) {
        
//         let pokemon = response.json();
//         pokemon.then(data=>console.log(data))
//     }

    
// }
// async function findAll() {


//     //traerme la data que apunta a cada uno
//     let response= await fetch(`${URL.BASE}${URL.API}${name}`);

//     if (response.ok) {
        
//         let pokemon = response.json();
//         pokemon.then(data=>console.log(data))
//     }

    
// }
// let pokemon= `

// <div class="col">
//     <div class="card">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//     </div>
// </div>

// `

// findByName("ditto");