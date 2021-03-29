import BarChart from './StatsPage/BarChart'
import * as Styles from '../../../style/Detail/PageDetail/Stats'

export default function Stats({ pokemon }) {
    return (
        <Styles.MainContainer>
            <BarChart stats={pokemon.stats} />
            <Styles.InfoText>
                ATK: Attack, DFS: Defense, SATK: Special Attack, SDFS: Special Defense, SPD: Speed
            </Styles.InfoText>
        </Styles.MainContainer>
    )
}