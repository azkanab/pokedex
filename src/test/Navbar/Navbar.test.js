import { render, screen } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

test('Check if the navigating works', () => {
  render(
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RecoilRoot>);
  const linkToHome = screen.getByText(/Home/i)
  const linkToMyPokemon = screen.getByText(/My Pokémon/i)

  window.scrollTo = jest.fn();

  // check if the menus are rendered
  expect(linkToHome).toBeInTheDocument()
  expect(linkToMyPokemon).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(linkToMyPokemon, leftClick)

  const myPokemonSubtitle = screen.getByText(/Here are your/i)

  // check if it is navigated to my Pokemon page after clicking My Pokemon Navbar
  expect(myPokemonSubtitle).toBeInTheDocument()
  expect(window.scrollTo).toBeCalledWith(0, 0);
});