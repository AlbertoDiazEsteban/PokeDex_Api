// Conectar la API
const URL = "https://pokeapi.co/api/v2/pokemon/"

const searchImput = document.getElementById ("search");
const pokedexContainer = document.getElementById ("pokedex");
const statsContainer = document.getElementById ("stats");
const imgPokemonContainer = document.getElementById ("img-pokemon");
const backgroundPokemon = document.querySelector(".screen");
const typeColors = {
  "dark": "#373636",
  "normal": "#A8A878",
  "fire": "#F08030",
  "water": "#6890F0",
  "grass": "#78C850",
  "electric": "#F8D030",
  "ice": "#98D8D8",
  "fighting": "#C03028",
  "poison": "#A040A0",
  "ground": "#E0C068",
  "flying": "#A890F0",
  "psychic": "#F85888",
  "bug": "#A8B820",
  "rock": "#B8A038",
  "ghost": "#705898",
  "dragon": "#7038F8",
  "steel": "#B8B8D0",
  "fairy": "#F0B6BC"
};

async function searchPokemon() {
  const searchedPokemon = searchImput.value.toLowerCase();

  try {
    const response = await fetch(URL + searchedPokemon)
    const data = await response.json();
    console.log(data);
    imgPokemonContainer.innerHTML = 
    `
    <img src="${data.sprites.other['official-artwork'].front_default}">
    <span class="shadow"></span>
    `;
    pokedexContainer.innerHTML = 
    `
      <h2 class="name"> ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <p class="number">#${data.id.toString().padStart(3, '0')}</p>
      <div>
      <div class="type-container">
        <p class="type">${data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1).toLowerCase()}</p>
        ${data.types[1] ? `<p class="type-secondary">${data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1).toLowerCase()}</p>` : ''}
      </div>

      
      <p class="info">Height: ${data.height / 10}m  |  Weight: ${data.weight / 10}kg</p>
      
    `;
    statsContainer.innerHTML = 
    `
    <div class="stat-row">
        <div class="stat-desc">HP</div>
        <div class="stat-number">${data.stats[0].base_stat}</div>
        <div class="stat-bar">
            <div class="bar-inner" style="width: ${data.stats[0].base_stat}px"></div>
            <div class="bar-outer"></div>
        </div>
    </div>

    <div class="stat-row">
        <div class="stat-desc">ATK</div>
        <div class="stat-number">${data.stats[1].base_stat}</div>
        <div class="stat-bar">
            <div class="bar-inner" style="width: ${data.stats[1].base_stat}px"></div>
            <div class="bar-outer"></div>
        </div>
    </div>

    <div class="stat-row">
        <div class="stat-desc">DEF</div>
        <div class="stat-number">${data.stats[2].base_stat}</div>
        <div class="stat-bar">
            <div class="bar-inner" style="width: ${data.stats[2].base_stat}px"></div>
            <div class="bar-outer"></div>
        </div>
    </div>

    <div class="stat-row">
        <div class="stat-desc">SPD</div>
        <div class="stat-number">${data.stats[5].base_stat}</div>
        <div class="stat-bar">
            <div class="bar-inner" style="width: ${data.stats[5].base_stat}px"></div>
            <div class="bar-outer"></div>
        </div>
    </div>       
    `;
    
    //backgroundPokemon.classList.add(`bg-${data.types[0].type.name.toLowerCase()}`);
    
    // fondo del screen del color del tipo de pokemon
    const pokemonType = data.types[0].type.name;
    const backgroundColor = typeColors[pokemonType];
    backgroundPokemon.style.backgroundColor = backgroundColor;

    // fondo del TYPE del color del tipo de pokemon
    const typeBackground = document.querySelector(".type");
    typeBackground.style.backgroundColor = backgroundColor;


    // Barras de los stats del color del tipo primario 
    const statBars = document.querySelectorAll(".bar-outer, .bar-inner");
    statBars.forEach(bar => {
      bar.style.backgroundColor = backgroundColor;
    });

    // fondo del TYPE SECUNDARIO del color del tipo de pokemon secundario
    const typeBackgroundSec = document.querySelector(".type-secondary");
    const pokemonTypeSec = data.types[1].type.name;
    const backgroundColorSec = typeColors[pokemonTypeSec];
    typeBackgroundSec.style.backgroundColor = backgroundColorSec;


  } catch (error) {
    console.error();
  }
}

// funcion para que el boton busque
document.getElementById("btn-search").addEventListener("click", searchPokemon);


// document.addEventListener('DOMContentLoaded', function() {
//   const pokeballItem = document.querySelector('#pokeball-item');


//   pokeballItem.addEventListener('click', function() {
//   backgroundPokemon.remove();
// });
// });

const rotomPc = document.querySelector('.rotom-pc-full');

rotomPc.addEventListener('click', () => {
  rotomPc.remove();
});



