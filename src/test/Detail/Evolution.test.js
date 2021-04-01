import { render, screen, waitFor } from '@testing-library/react';
import EvolutionGroup from '../../component/Detail/PageDetail/EvolutionPage/EvolutionGroup';
import EvolutionItem from '../../component/Detail/PageDetail/EvolutionPage/EvolutionItem';
import { MockedProvider } from '@apollo/client/testing';
import { MocksEvolutionChain } from '../ApolloMocks/Queries'

const isLoading = false
const setIsLoading = jest.fn()

test('Check if evolution group is rendered', async () => {
    render(
        <MockedProvider mocks={MocksEvolutionChain} addTypename={false}>
            <EvolutionGroup evolutionID='1' isLoading={isLoading} setIsLoading={setIsLoading} />
        </MockedProvider>);
        
    await waitFor(() => {
        // Last evolved form of id 1
        const lastEvolved = screen.getByText(/Ivysaur/i)
        expect(lastEvolved).toBeInTheDocument()
    })
});

test('Check Evolution Item component', async () => {
    var data = {
        pokeBefore: {
            name: 'bulbasaur',
            min_level: null,
            phase: 1,
        }, pokeAfter: {
            name: 'venusaur',
            min_level: 5,
            phase: 2
        }
    }
    render(
        <MockedProvider mocks={MocksEvolutionChain} addTypename={false}>
            <EvolutionItem data={data} />
        </MockedProvider>);
        
    await waitFor(() => {
        const pokeAfter = screen.getByText(/Venusaur/i)
        const minLevel = screen.getByText(/5/i)

        expect(pokeAfter).toBeInTheDocument()
        expect(minLevel).toBeInTheDocument()
    })
});