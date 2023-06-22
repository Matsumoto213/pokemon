import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

interface Pokemon {
  species: {
    name: string
    url: string
  }
  url: string
  sprites: {
    front_default: string
  }
}
interface PokemonSpecies {
  names: {
    language: {
      name: string
    }
    name: string
  }[]
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
      .then((data) => {
        resolve(data)
      })
      .catch((error) => reject(error))
  })
}

const getJapanesePokemonName = async (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data: PokemonSpecies) => {
        const japaneseName = data.names.find(
          (name) => name.language.name === 'ja'
        )
        resolve(japaneseName ? japaneseName.name : '')
      })
      .catch((error) => reject(error))
  })
}

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemon] = useState<PokemonArray>([])

  const loadPokemon = async (data: Pokemon[]) => {
    const _pokemonData: PokemonArray = await Promise.all(
      data.map(async (pokemon: Pokemon) => {
        const pokemonDetails = await getPokemonDetails(pokemon.url)
        const japaneseName = await getJapanesePokemonName(
          pokemonDetails.species.url
        )

        const newSpecies = {
          ...pokemonDetails.species,
          name: japaneseName || pokemonDetails.species.name,
        }

        const newPokemon = {
          ...pokemonDetails,
          species: newSpecies,
        }
        return newPokemon
      })
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
          <li key={pokemon.species.name}>
            {pokemon.species.name}
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.species.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
