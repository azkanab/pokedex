import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import userEvent from '@testing-library/user-event'
import MyPokemon from '../../component/MyPokemon'
import { myPokemonState } from '../../state/myPokemon'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()

const spyScrollTo = jest.fn();

const initializeState = ({ set }) => {
    set(
        myPokemonState,
        [{
            name: 'Ody',
            details: {
                id: 1,
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
        }, {
            name: 'Azka',
            details: {
                id: 2,
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                },
                name: 'wartortle',
                types: [{
                    type: {
                        name: 'water'
                    }
                }],
                abilities:[{
                    ability: {
                        name: 'torrent'
                    }
                }, {
                    ability: {
                        name: 'rain-dish'
                    }
                }]
            }
        }]);
};

beforeEach(() => {
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    spyScrollTo.mockClear();
});

test('Check if my pokemon page renders the data', () => {
    render(
    <RecoilRoot initializeState={initializeState}>
        <Router history={history}>
            <MyPokemon />
        </Router>
    </RecoilRoot>);

    // check item id:1
    const pokemonNameText = screen.getByText(/Azka/i)
    // check another item (id: 0)
    const pokemonTypeText = screen.getByText(/ground/i)

    expect(pokemonNameText).toBeInTheDocument()
    expect(pokemonTypeText).toBeInTheDocument()

    expect(spyScrollTo).toBeCalledWith(0, 0);
});

test('Check open delete modal after click remove button', () => {
    render(
    <RecoilRoot initializeState={initializeState}>
        <Router history={history}>
            <MyPokemon />
        </Router>
    </RecoilRoot>);
  
    const removeButton = screen.getByTitle('remove-0')
    expect(removeButton).toBeInTheDocument()

    const leftClick = { button: 0 }
    userEvent.click(removeButton, leftClick)

    const deleteModal = screen.getByText(/Confirmation/i)
    expect(deleteModal).toBeInTheDocument()
});