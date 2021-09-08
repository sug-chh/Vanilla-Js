const pokeContainer = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon((id = i));
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard((pokemon = data));
};

const createPokemonCard = (pokemon) => {
  console.log(pokemon)
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // Cool little method in javascript i.e. padStart()
  const id = pokemon.id.toString().padStart(3, "0");
  const poke_types = pokemon.types.map((type) => type.type.name);
  // poke_types of bulbasaur = ['grass', 'poison']
  //  poke_types of ['grass', 'poison'].indexOf('grass') which returns 0th index
  // It's gonna be 0 > -1 so I'm gonna return 'grass' from main_types.find('grass') => ['grass', 'poison'].indexOf('grass') > -1
  // Which is gonna be ....=> 0 > -1 so It's gonna return me the value in which main_types.value === 'grass' so the value of const type === 'grass'
  // So whichever type comes first in the main_types object , const type will be assigned that particular type like in case of Pidgey in which poke_types is ['normal', 'flying'] but const type will be assigned 'flying' as it comes first in main_types object. Quite a mouthful logic
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  pokemonEl.style.backgroundColor = colors[type];
  const pokemonInnerHTML = `
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}"
          />
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
