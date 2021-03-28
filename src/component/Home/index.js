import * as Styles from '../../style/Home/Home'
import Banner from './Banner'
import Cards from './Cards'

export default function Home() {
    return (
        <Styles.Container>
            <Banner />
            <Styles.Title>All Pokemon</Styles.Title>
            <Styles.SubTitle>Catch one to add your Pokemon collection in your Pokedex</Styles.SubTitle>
            <Cards />
        </Styles.Container>
    )
}