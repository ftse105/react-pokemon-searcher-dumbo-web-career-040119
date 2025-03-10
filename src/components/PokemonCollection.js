import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemons = this.props.pokemonFilter

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {
          pokemons.map(poke => {
            return <PokemonCard
              pokemon={poke}
              />
          })
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
