/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeCharmander: "url('/charmander-home.png')",
        bgCharacters: "url('/bg-characters.png')",
        bgColeta: "url('/fondo-coleta.png')",
        puebloPaleta: "url('/fondo-permanente.png')",
        pikachuFondo: "url('/fondo-pikachu.png')",
        pixelFondo: "url('/fondoPixeleado.png')",
        bgPikachu: "url('/pikachu-bg.png')",
        bgPikachuHierba: "url('/pikachu-hierba.png')",
        bgPokemonesMitad: "url('/pokemons-mitad.png')",
        bgFondoMate: "url('/fondo-mate.png')",
        bgPokemonBatalla: "url('/batalla-pokemon-fondo.jpg')",
        bgPokemonVolando: "url('/bg-pokemon-volando.jpeg')",
        bgPokemonFondoNegro: "url('/bg-pokemon-negro-fondo.jpeg')",
        bgPokemonesUnidos: "url('/pokemon-unidos.jpeg')",
        bgPokemonNavidad: "url('/bg-pokemon-navidad.jpeg')",
        bgPokemonCiudad: "url('/bg-pokemon-ciudad.jpeg')",
      },
    },
    fontFamily: {
      LilitaOne: ["Lilita One"],
      PacificoFamily: ["Pacifico"],
      MarkerDisplay: ["Permanent Marker"],
    },
  },
  plugins: [],
};
