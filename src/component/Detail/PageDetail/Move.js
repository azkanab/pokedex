import * as Styles from '../../../style/Detail/PageDetail/Move'
import MoveItem from './MovePage/MoveItem'

export default function Move({ pokemon }) {
    const renderMove = (moves) => {
        return (
            moves.map((move, i) => (
                <MoveItem key={i} move={move} />
            ))
        )
    }

    return (
        <Styles.Container>
            <Styles.Card>
                {pokemon && renderMove(pokemon.moves)}
            </Styles.Card>
        </Styles.Container>
    )
}