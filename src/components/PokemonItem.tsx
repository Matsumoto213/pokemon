import React from 'react';
import { Pokemon } from '../types/pokemonTypes';
import '../App.css'

interface PokemonItemProps {
    pokemon: Pokemon;
  }

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
    return (
        <div className = 'pokemonItem'>
            <span>{pokemon.species.name}</span>
            <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
        </div>
      );
};

export default PokemonItem;
