const button = document.getElementById("search-button");
const input = document.getElementById("search-input");
const card = document.getElementById("pokemon-card");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


let link = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
let currentPokemonLink = "";

const fetchData = async () => {
  try {
    const res = await fetch(currentPokemonLink);
    const data = await res.json();
    displayPokemonCard(data);
  } catch (err) {
    alert("Pokémon not found")
  }
};

const displayPokemonCard = data => {
  types.innerHTML = "";
  if (document.getElementById("sprite")) {
    document.getElementById("sprite").remove();
  }
  pokemonName.innerHTML = data.name.toUpperCase();
  pokemonId.innerHTML = `#${data.id}`; 

 const imgElement = document.createElement("img"); 
imgElement.src = data.sprites.front_default;
imgElement.alt = data.name;
imgElement.id = "sprite";

 document.getElementById("img").prepend(imgElement)

  weight.innerHTML = `Weight: ${data.weight}`;
  height.innerHTML = `Height: ${data.height}`;
  getTypes(data.types);
  hp.innerHTML = data.stats[0].base_stat;
  attack.innerHTML = data.stats[1].base_stat;
  defense.innerHTML = data.stats[2].base_stat;
  specialAttack.innerHTML = data.stats[3].base_stat;
  specialDefense.innerHTML = data.stats[4].base_stat;
  speed.innerHTML = data.stats[5].base_stat;

  // document.getElementsByClassName('label').forEach(label => label.style.display = "block")
}

const getTypes = (typesArray) => {

  typesArray.forEach(typeObj => {
    const typeElement = document.createElement("p");
    typeElement.textContent = typeObj.type.name.toUpperCase();
    types.appendChild(typeElement);
  });
}


button.addEventListener("click", () => {
  currentPokemonLink = link + input.value.toLowerCase();
  fetchData();
})