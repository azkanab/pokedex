import * as Styles from '../../style/Navbar/Navbar'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <Styles.Navbar>
            <Styles.Container>
                <Styles.ImgContainer>
                    <Styles.PokemonImg src='/pokemon.png' />
                </Styles.ImgContainer>
                <Styles.TextContainer>
                    <NavLink to='/' style={{textDecoration: 'none'}}><Styles.MainText home>Home</Styles.MainText></NavLink>
                    <NavLink to='/my-pokemon' style={{textDecoration: 'none'}}><Styles.MainText>My Pokemon</Styles.MainText></NavLink>
                </Styles.TextContainer>
            </Styles.Container>
        </Styles.Navbar>
    )
}