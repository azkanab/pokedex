import * as Styles from '../../style/Home/Card'
import capitalizeFirstLetter from '../../utils/uppercaseText'

export default function Card({ pokemon }) {
    return (
        <Styles.Card>
            <Styles.PokemonImg src={pokemon.image} />
            <Styles.PokemonName>{capitalizeFirstLetter(pokemon.name)}</Styles.PokemonName>
        </Styles.Card>
    )
}