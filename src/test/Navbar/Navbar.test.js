import { render, screen } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil';
import { MockedProvider } from '@apollo/client/testing';
import { MocksPokemons } from '../ApolloMocks/Queries'

test('Check if the navigating works', () => {
  render(
    <RecoilRoot>
      <MockedProvider mocks={MocksPokemons} addTypename={false}>
        <App />
      </MockedProvider>
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