import React from 'react'
import { Pokemon } from '../types/pokemonTypes'
import '../App.css'

interface PokemonItemProps {
  pokemon: Pokemon
}

const typeColors: { [key: string]: string } = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const bgColor = typeColors[pokemon.types[0].type.name]

  return (
    <div className="pokemonItem" style={{ backgroundColor: bgColor }}>
      <div className="pokemonInfo">
        <span>{pokemon.species.name}</span>
      </div>
      <div className="pokemonImage">
        <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
      </div>
    </div>
  )
}

export default PokemonItem
