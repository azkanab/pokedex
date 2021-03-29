import Pokemon from './Pokemon'
import * as Styles from '../../../../style/Detail/PageDetail/Evolution'
import { useEffect } from 'react/cjs/react.development'

export default function EvolutionItem({ data }) {
    const { pokeBefore, pokeAfter } = data

    return (
        <Styles.Card>
            <Pokemon name={pokeBefore.name} />
            <div>
                <Styles.Arrow>⟶</Styles.Arrow>
                <Styles.PokeLevel>{pokeAfter.min_level !== null ? 'Lv. '+pokeAfter.min_level : 'Use a special item'}</Styles.PokeLevel>
            </div>
            <Pokemon name={pokeAfter.name} />
        </Styles.Card>
    )
}