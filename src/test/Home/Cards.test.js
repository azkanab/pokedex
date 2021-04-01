import { render, screen, waitFor } from '@testing-library/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Cards from '../../component/Home/Cards'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  });

const history = createMemoryHistory()

test('Check if Cards can get and render the data', async () => {
  render(
    <ApolloProvider client={client}>
      <Router history={history}>
        <Cards />
      </Router>
    </ApolloProvider>);

    await waitFor(() => {
      const secondPokemon = screen.getByText(/Ivysaur/i)
      expect(secondPokemon).toBeInTheDocument()
    })
}, 30000);
