import { useEffect, useState } from 'react'
import React from 'react'
import '../App.css'
import PokemonItem from './PokemonItem'
import { Pokemon } from '../types/pokemonTypes'

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
    <div className="pokemonContainer">
      {pokemonData.map((pokemon) => (
        <PokemonItem key={pokemon.species.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
