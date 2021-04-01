import { render, screen, waitFor } from '@testing-library/react';
import Cards from '../../component/Home/Cards'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing';
import { MocksPokemons } from '../ApolloMocks/Queries'

const history = createMemoryHistory()

test('Check if Cards can get and render the data', async () => {
  render(
    <MockedProvider mocks={MocksPokemons} addTypename={false}>
      <Router history={history}>
        <Cards />
      </Router>
    </MockedProvider>);

    await waitFor(() => {
      const secondPokemon = screen.getByText(/Ivysaur/i)
      expect(secondPokemon).toBeInTheDocument()
    })
});
