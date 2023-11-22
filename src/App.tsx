import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon, Pokemons } from "./interfaces/pokemon";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
      response.data.results.forEach(async(pokemon:Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setPokemons((p) => [...p,poke.data]);
        console.log("Poke data: ",poke.data);
      })
    }

    const initUseEffect = async () => {
      await getPokemon();
    };
    initUseEffect();
  },[])

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header"> Pokemon</header>
        <PokemonCollection pokemons={pokemons}/>
      </div>
    </div>
  );
};

export default App;
