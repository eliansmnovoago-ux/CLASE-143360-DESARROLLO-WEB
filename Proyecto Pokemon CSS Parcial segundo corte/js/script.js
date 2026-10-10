// Objeto con la información de los Pokémon
const pokemones = {
  pikachu: {
    nombre: "Pikachu",
    tipo: "Tipo: Eléctrico",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  bulbasaur: {
    nombre: "Bulbasaur",
    tipo: "Tipo: Planta / Veneno",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  charmander: {
    nombre: "Charmander",
    tipo: "Tipo: Fuego",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  squirtle: {
    nombre: "Squirtle",
    tipo: "Tipo: Agua",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  eevee: {
    nombre: "Eevee",
    tipo: "Tipo: Normal",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  }
};

// Función para cambiar la tarjeta según el Pokémon seleccionado
function verPokemon(clave) {
  const pokemonSeleccionado = pokemones[clave];
  if (pokemonSeleccionado) {
    document.getElementById('nombre').innerText = pokemonSeleccionado.nombre;
    document.getElementById('tipo').innerText = pokemonSeleccionado.tipo;
    document.getElementById('imagen').src = pokemonSeleccionado.imagen;
  }
}