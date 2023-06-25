interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}
export interface Pokemon {
  species: {
    name: string
    url: string
  }
  url: string
  sprites: {
    front_default: string
  }

  types: PokemonType[]
}
