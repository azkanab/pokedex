import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Banner from '../../component/Home/Banner'

test('Check if Banner can detect how much pokemon we have', () => {
  render(
    <RecoilRoot>
        <Banner />
    </RecoilRoot>);
    // Based on default value of the recoil
    const noPokemonText = screen.getByText(/No Pokémon found/i)

    expect(noPokemonText).toBeInTheDocument()
});
