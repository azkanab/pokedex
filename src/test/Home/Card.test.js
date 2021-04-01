import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Card from '../../component/Home/Card'

test('Check if Card renders pokemon data, also check if the changeNumberDigit function is right', () => {
    // Mocking a pokemon data
    const pokemonData = {
        name: 'pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        id: 25
    }
    
    const history = createMemoryHistory()
  render(
    <Router history={history}>
        <Card pokemon={pokemonData} />
    </Router>);

    // Check utils changeNumberDigit from 25 to 025
    const pokemonID = screen.getByText(/#025/i)

    expect(pokemonID).toBeInTheDocument()
});
