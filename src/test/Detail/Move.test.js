import { render, screen } from '@testing-library/react';
import Move from '../../component/Detail/PageDetail/Move'
import MoveItem from '../../component/Detail/PageDetail/MovePage/MoveItem'

const pokemonData = {
    moves: [{
        move: {
            name: 'mega-punch'
        },
        version_group_details: [{
            level_learned_at: 0
        }]
    }, {
        move: {
            name: 'pay-day'
        },
        version_group_details: [{
            level_learned_at: 20
        }]
    }, {
        move: {
            name: 'thunder-punch'
        },
        version_group_details: [{
            level_learned_at: 26
        }]
    }]
}

test('Check if all moves are rendered', () => {
    render(
        <Move pokemon={pokemonData} />);

    const firstMove = screen.getByText(/mega-punch/i)
    expect(firstMove).toBeInTheDocument()

    const secondMove = screen.getByText(/pay-day/i)
    expect(secondMove).toBeInTheDocument()

    const thirdMove = screen.getByText(/thunder-punch/i)
    expect(thirdMove).toBeInTheDocument()
});

test('Check if all moves are rendered', () => {
    render(
        <MoveItem move={pokemonData.moves[0]} />);

    const minLevel = screen.getByText(/use a special item/i)
    expect(minLevel).toBeInTheDocument()
});