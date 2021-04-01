import { render, screen } from '@testing-library/react';
import Card from '../../component/MyPokemon/Card'

test('Check if card in my Pokemon page renders correctly', () => {
    const pokemonData = {
        name: 'Ody',
        details: {
            id: 34,
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            },
            name: 'nidoking',
            types: [{
                type: {
                    name: 'poison'
                }
            }, {
                type: {
                    name: 'ground'
                }
            }],
            abilities:[{
                ability: {
                    name: 'poison-point'
                }
            }, {
                ability: {
                    name: 'rivalry'
                }
            }, {
                ability: {
                    name: 'sheer-force'
                }
            }]
        }
    }

    const indexPokemon = 1

    const setShowRemoveModal = jest.fn()
    const setRemovedData = jest.fn()
    const setRemovedIndex = jest.fn()
    
  render(
        <Card index={indexPokemon} pokemon={pokemonData} setShowRemoveModal={setShowRemoveModal} setIndex={setRemovedIndex} setRemoved={setRemovedData}  />);
    
    const ability = screen.getByText(/poison-point/i)

    expect(ability).toBeInTheDocument()
});
