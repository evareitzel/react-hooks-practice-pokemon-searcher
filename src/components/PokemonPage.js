import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokemonObjs => {
        setPokemon(pokemonObjs) 
      }) // .then(setPokemon)
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }
  
  function handleSearchInputChange(e) {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const filtered = pokemon.filter(po =>
    po.name.includes(searchInput)
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearchInputChange={handleSearchInputChange} searchInput={searchInput} />
      <br />
      <PokemonCollection pokemon={filtered} />
    </Container>
  );
}

export default PokemonPage;
