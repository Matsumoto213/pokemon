import React, { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import NavBody from './components/NavBody'
import PokemonFilter from './components/PokemonFilter'

function App() {
  const [filters, setFilters] = useState({generation: '', type: '', count: ''});
  const handleSearch = (generation: string, type: string, count: string) => {
    setFilters({generation, type, count});
  };
  return (
    <div className="App">
      <NavBody />
      <PokemonFilter onSearch={handleSearch}/>
      <PokemonList filters={filters}/>
    </div>
  )
}

export default App
