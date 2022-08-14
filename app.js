//1.almacenamiento de url
const URL = "https://pokeapi.co/api/v2/pokemon/"

//2.cremos un array para almacenar
let listaPoke = []

//.3
window.onload = () => {
    init();
}

// 4.inicializamos la busqueda de información
const init = () => {
    getpoke();


}

//5.definimos nuestra función getpoke que estamos almacenando datos en una constante de datos en crudo
const getpoke = async () => {

    for (index = 1; index < 152; index++) {
        const pokemon1 = await fetch(`${URL}${index}`);

        //le hemos puesto await porque hasta que no recupere todos los datos no va a pasar a la sig linea de ejecución
        const jsonConverter = await pokemon1.json();
        listaPoke.push(jsonConverter);

    }
    mappedpoke(listaPoke)
}

// 7. etapa de mapeo
const mappedpoke = (poke) => {

    poke.map((item) =>
        printpoke({ nombre: item.name, imagen: item.sprites.other.dream_world.front_default, tipo: item.types[0].type.name, peso: item.weight })
        // const pokemon = { nombre: item.name, imagen: item.sprites.other.dream_world.front_default }
    )

}


// 6.
const printpoke = (item) => {
    console.log(item)
    let containerPokeApi = document.querySelector("#containerpokeapi");
    containerPokeApi.innerHTML += `
    
 <div class="containerSingle"> 
 <div class = "pokemon-container">
 <img src="${item.imagen}"alt="${item.nombre}"/>
 <h3> ${item.nombre}</h3>
 <p> ${item.tipo}</p>
 <P class="peso">${item.peso}</p>
 </div>
 </div>

    `


}