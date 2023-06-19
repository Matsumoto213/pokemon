import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

interface Pokemon {
  name: string
  url: string
  sprites: {
    front_default: string
  }
}

type PokemonArray = Pokemon[]
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemon = (url: string): Promise<PokemonArray> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data.results))
      .catch((error) => reject(error))
  })
}

const getPokemonDetails = (url: string): Promise<Pokemon> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemon] = useState<PokemonArray>([])

  const loadPokemon = async (data: Pokemon[]) => {
    const _pokemonData: PokemonArray = await Promise.all(
      data.map((pokemon: Pokemon) => getPokemonDetails(pokemon.url))
    )
    setPokemon(_pokemonData)
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await getPokemon(pokeApiUrl)
      loadPokemon(data)
    }
    fetchPokemonData()
  }, [])

  return (
    <div>
      <h1>ポケモン図鑑</h1>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.name}>
            <p>おはよう</p>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
