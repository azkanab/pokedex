import * as Styles from '../../style/Home/Home'
import Banner from './Banner'
import Cards from './Cards'

export default function Home() {
    return (
        <Styles.Container>
            <Banner />
            <Styles.Title>All Pokémons</Styles.Title>
            <Styles.SubTitle>Catch one to add a new Pokémon to your collection</Styles.SubTitle>
            <Cards />
        </Styles.Container>
    )
}