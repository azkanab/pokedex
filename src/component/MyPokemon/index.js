import * as Styles from '../../style/MyPokemon/MyPokemon'
import { myPokemonState } from '../../state/myPokemon'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import Card from './Card'

export default function MyPokemon() {
    const [myPokemon, setMyPokemon] = useRecoilState(myPokemonState)

    const renderMyPokemon = (pokemons) => {
        return (
            pokemons.map((pokemon, i) => (
                <Card key={i} index={i} pokemon={pokemon} myPokemonList={myPokemon} setMyPokemon={setMyPokemon} />
            ))
        )
    }

    return (
        <Styles.Container>
            <Styles.Title>My Pokémon</Styles.Title>
            <Styles.SubTitle>Here are your Pokémon(s) in your Pokédex</Styles.SubTitle>
            <Styles.ButtonContainer>
                {myPokemon.length === 0 &&
                    <div>
                        <Styles.NotFoundImg src='/AshPikachu.png' />
                        <Styles.NotFoundText>No Pokémon found in your Pokédex</Styles.NotFoundText>
                    </div>
                }
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Styles.CatchButton>{myPokemon.length === 0 ? 'Start catching a Pokémon' : 'Catch more Pokémons'}</Styles.CatchButton>
                </Link>
            </Styles.ButtonContainer>
            <Styles.CardContainer>
                {myPokemon.length > 0 && renderMyPokemon(myPokemon)}
            </Styles.CardContainer>
        </Styles.Container>
    )
}