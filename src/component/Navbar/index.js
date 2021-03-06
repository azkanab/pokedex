import * as Styles from '../../style/Navbar/Navbar'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    return (
        <Styles.Navbar>
            <Styles.Container>
                <Styles.ImgContainer>
                    <NavLink to='/'>
                        <Styles.PokemonImg src='/pokemon.png' />
                    </NavLink>
                </Styles.ImgContainer>
                <Styles.TextContainer>
                    <NavLink to='/' style={{textDecoration: 'none'}}><Styles.MainText home active={location.pathname === '/' ? true : false}>Home</Styles.MainText></NavLink>
                    <NavLink to='/my-pokemon' style={{textDecoration: 'none'}}><Styles.MainText active={location.pathname === '/my-pokemon' ? true : false}>My Pokémon</Styles.MainText></NavLink>
                </Styles.TextContainer>
            </Styles.Container>
        </Styles.Navbar>
    )
}