import * as Styles from '../../style/Home/Banner'
import { myPokemonState } from '../../state/myPokemon'
import { useRecoilState } from 'recoil'

export default function Banner() {
    const [myPokemon] = useRecoilState(myPokemonState)

    return (
        <Styles.BannerContainer>
            <Styles.Banner>
                <Styles.BannerTitle>Hi, Azka N. Mumtaz!</Styles.BannerTitle>
                <Styles.BannerInformation>{myPokemon.length === 0 ? 'No Pokémon found in your Pokédex' : 'You have '+myPokemon.length+' Pokémon(s) in your Pokédex' }</Styles.BannerInformation>
                <Styles.PikachuPic src='/pikachu.png' /> 
            </Styles.Banner>
        </Styles.BannerContainer>
    )
}