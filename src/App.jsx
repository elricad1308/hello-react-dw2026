import MyButton from './components/MyButton'
import PokemonList from './components/PokemonList'
import { useState } from 'react'

import './App.css'

function App() {
  const [ pokemon, setPokemon ] = useState([])

  async function searchPokemon () {
  let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  let data = await response.json()

  setPokemon([
    ...pokemon,
    { id: data.id, name: data.name, sprite: data.sprites.front_default}
  ])
}

  return (
    <>
      <MyButton onClick={searchPokemon}/>
      
      <PokemonList pokemon={pokemon}/>
    </>
  )
}

export default App
