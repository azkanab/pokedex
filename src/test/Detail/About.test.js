import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import About from '../../component/Detail/PageDetail/About'
import InfoCard from '../../component/Detail/PageDetail/AboutPage/InfoCard'
import Ability from '../../component/Detail/PageDetail/AboutPage/Ability'
import { MockedProvider } from '@apollo/client/testing';
import { MocksAbilityDetail } from '../ApolloMocks/Queries'

const pokemonData = {
    id: 1,
    sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    },
    name: 'nidoking',
    height: 10,
    weight: 500,
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

test('Check if the type is rendered', () => {
    render(
    <MockedProvider mocks={MocksAbilityDetail} addTypename={false}>
        <About pokemon={pokemonData} />
    </MockedProvider>);

    const poisonType = screen.getByText(/Poison/i)
    expect(poisonType).toBeInTheDocument()

    const groundType = screen.getByText(/Ground/i)
    expect(groundType).toBeInTheDocument()
});

// Test the InfoCard
test('Check if the height is rendered', () => {
    render(
        <MockedProvider mocks={MocksAbilityDetail} addTypename={false}>
            <InfoCard pokemon={pokemonData} />
        </MockedProvider>);

    const height = screen.getByText(/10 ft/i)
    
    expect(height).toBeInTheDocument()
});

// Test the Ability unit
test('Check if the ability is giving details', async() => {
    render(
    <MockedProvider mocks={MocksAbilityDetail} addTypename={false}>
        <Ability ability={pokemonData.abilities[1]} index={1} />
    </MockedProvider>);

    var helpButton

    await waitFor(() => {
        helpButton = screen.getByTitle('tooltip-1')
        expect(helpButton).toBeInTheDocument()
    })
    
    const leftClick = { button: 0 }
    userEvent.click(helpButton, leftClick)
    
    const detailRivalry = screen.getByText(/increases damage inflicted to 1.25/i)
    
    expect(detailRivalry).toBeInTheDocument()
});