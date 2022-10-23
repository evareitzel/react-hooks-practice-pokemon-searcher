// App
  // PokemonPage
    // Search
    // PokemonForm
    // PokemonCollection
      // PokemonCard

      // from Pokemon Card
        // function onClick(){
        //   console.log('sprite clicked!')
        //   const display = sprite === sprites.front ? sprites.back : sprites.front
        //   setSprite(display)
        // }

        const filtered = pokemon.filter(po => {
          if(searchInput.length>0){
            return po.name.includes(searchInput) ? po : null
          }else{
            return po
          }
        })