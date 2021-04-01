import { render, screen, waitFor } from '@testing-library/react';
import EvolutionGroup from '../../component/Detail/PageDetail/EvolutionPage/EvolutionGroup';
import EvolutionItem from '../../component/Detail/PageDetail/EvolutionPage/EvolutionItem';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
});

const isLoading = false
const setIsLoading = jest.fn()

jest.setTimeout(30000)

test('Check if evolution group is rendered', async () => {
    render(
        <ApolloProvider client={client}>
            <EvolutionGroup evolutionID='1' isLoading={isLoading} setIsLoading={setIsLoading} />
        </ApolloProvider>);
        
    await waitFor(() => {
        // Last evolved form of id 1
        const lastEvolved = screen.getByText(/Ivysaur/i)
        expect(lastEvolved).toBeInTheDocument()
    }, 30000)
}, 30000);

test('Check Evolution Item component', async () => {
    var data = {
        pokeBefore: {
            name: 'Bulbasaur',
            min_level: null,
            phase: 1,
        }, pokeAfter: {
            name: 'Venusaur',
            min_level: 5,
            phase: 2
        }
    }
    render(
        <ApolloProvider client={client}>
            <EvolutionItem data={data} />
        </ApolloProvider>);
        
    await waitFor(() => {
        const pokeAfter = screen.getByText(/Venusaur/i)
        const minLevel = screen.getByText(/5/i)

        expect(pokeAfter).toBeInTheDocument()
        expect(minLevel).toBeInTheDocument()
    }, 30000)
}, 30000);