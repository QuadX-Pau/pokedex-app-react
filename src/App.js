import './index.css';
import './App.css';

import React, { useEffect, useState } from 'react';

import PokeCard from './components/PokeCard';

const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
      
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-container">
      <div className="topbar-container">
        <h1 className="topbar-title">Pokédex</h1>
      </div>
      <div className="pokemon-container">
        <div className="all-container">
          
          {allPokemons.map( (pokemonStats, index) => 
            <PokeCard
              key={index}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0,3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0,3)}
            />
            )}
        </div>

          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;