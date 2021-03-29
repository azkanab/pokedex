import * as Styles from '../../../../style/Detail/PageDetail/About'
import Ability from './Ability'

export default function InfoCard({ pokemon }) {
    const renderAbilities = (abilities) => {
        return (
            abilities.map(ability => (
                <Ability key={ability.ability.name} ability={ability} />
            ))
        )
    }
    return (
        <Styles.Card>
            <Styles.CardContainer>
                <Styles.ColumnCard>
                    <Styles.TitleCard>
                        Height
                    </Styles.TitleCard>
                    <Styles.SubTitleCard>
                        {pokemon.height} ft
                    </Styles.SubTitleCard>
                    <br />
                    <Styles.TitleCard>
                        Weight
                    </Styles.TitleCard>
                    <Styles.SubTitleCard>
                        {pokemon.weight} lbs
                    </Styles.SubTitleCard>
                </Styles.ColumnCard>
                <Styles.ColumnCard>
                    <Styles.TitleCard>
                        Abilities
                    </Styles.TitleCard>
                    {renderAbilities(pokemon.abilities)}
                </Styles.ColumnCard>
            </Styles.CardContainer>
        </Styles.Card>
    )
}