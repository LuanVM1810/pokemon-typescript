import React from 'react'
import { Pokemon } from '../interfaces/pokemon';
import PokemonList from './PokemonList';
import "./pokemon.css"

interface Props{
    pokemons: Pokemon[];
}

const PokemonCollection = (props : Props) => {
    const {pokemons} = props;
  return (
    <section className="collection-container">
        {pokemons.map((pokemon) => {
            return(
                <div className="">
                   <PokemonList
                    key = {pokemon.id}
                    name = {pokemon.name}
                    id = {pokemon.id}
                    image ={pokemon.sprites.front_default}
                   />
                </div>
            )
        })}
    </section>
  )
}

export default PokemonCollection