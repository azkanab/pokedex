import * as Styles from '../../../style/Detail/PageDetail/About'
import InfoCard from './AboutPage/InfoCard'
import uppercaseText from '../../../utils/uppercaseText'

export default function About({ pokemon }) {
    const renderType = (types) => {
        return(
            types.map((type, i) => (
                <Styles.TypeBox key={i} type={type.type.name}>
                    <Styles.TypeText type={type.type.name}>
                        {uppercaseText(type.type.name)}
                    </Styles.TypeText>
                </Styles.TypeBox>
            ))
        )
    }
    return (
        <Styles.Container>
            <InfoCard pokemon={pokemon} />
            <Styles.TypeContainer>
                <Styles.Title>Type</Styles.Title>
                <Styles.TypeItemContainer>
                    {renderType(pokemon.types)}
                </Styles.TypeItemContainer>
            </Styles.TypeContainer>
        </Styles.Container>
    )
}