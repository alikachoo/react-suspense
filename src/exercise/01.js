// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 🐨 you'll also need to get the fetchPokemon function from ../pokemon:
import {fetchPokemon, PokemonDataView, PokemonErrorBoundary, PokemonInfoFallback} from '../pokemon'
import { createResource } from 'utils'

const pokemonResource = createResource(fetchPokemon('pikachu'))

function PokemonInfo() {
  // 🐨 if there's no pokemon yet, then throw the pokemonPromise
  const pokemon = pokemonResource.read()
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <React.Suspense fallback={<PokemonInfoFallback name="Pikachu" />}>
            <PokemonInfo />
          </React.Suspense>  
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
