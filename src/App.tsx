import React from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import NavBody from './components/NavBody'
import PokemonFilter from './components/PokemonFilter'

function App() {
  return (
    <div className="App">
      <NavBody />
      <PokemonFilter />
      <PokemonList />
    </div>
  )
}

export default App
