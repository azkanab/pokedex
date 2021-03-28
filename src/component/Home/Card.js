import { Link } from 'react-router-dom'
import * as Styles from '../../style/Home/Card'
import capitalizeFirstLetter from '../../utils/uppercaseText'
import changeNumberDigit from '../../utils/changeNumberDigit'

export default function Card({ pokemon }) {
    return (
        <Link to={'/detail/'+pokemon.name} style={{textDecoration: 'none'}}>
            <Styles.Card>
                <Styles.PokemonImg src={pokemon.image} />
                <Styles.PokemonName>{capitalizeFirstLetter(pokemon.name)}</Styles.PokemonName>
                <Styles.PokemonID>#{changeNumberDigit(pokemon.id)}</Styles.PokemonID>
            </Styles.Card>
        </Link>
    )
}