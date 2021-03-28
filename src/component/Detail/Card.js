import * as Styles from '../../style/Detail/Card'
import uppercaseText from '../../utils/uppercaseText'
import changeNumberDigit from '../../utils/changeNumberDigit'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tab from './Tab'
import PageDetail from './PageDetail'

export default function Card({ pokemon }) {

    const [activeKey, setActiveKey] = useState('about')

    const handleClick = (key) => {
        setActiveKey(key)
    }

    const allMenu = [{
        name: 'About',
        key: 'about',
        click: () => handleClick('about')
    }, {
        name: 'Stats',
        key: 'stats',
        click: () => handleClick('stats')
    }, {
        name: 'Evolution',
        key: 'evolution',
        click: () => handleClick('evolution')
    }, {
        name: 'Move',
        key: 'move',
        click: () => handleClick('move')
    }]

    const renderTab = (menus) => {
        return (
            menus.map(menu => (
                <Tab data={menu} active={activeKey} />
            ))
        )
    }

    return (
        <Styles.Container>
            <Styles.Card>
                <Styles.PokemonImg src={pokemon.sprites.front_default} />
                <Styles.PokemonName>{uppercaseText(pokemon.name)}</Styles.PokemonName>
                <Styles.PokemonID>#{changeNumberDigit(pokemon.id)}</Styles.PokemonID>
                <Styles.ButtonContainer>
                    <Styles.CatchButton>
                        <Styles.PokeBallButton src='/pokeball2.png' />
                        Catch
                    </Styles.CatchButton>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Styles.SeeMoreButton>
                            See other pokemons
                        </Styles.SeeMoreButton>
                    </Link>
                </Styles.ButtonContainer>
                <div style={{display: 'flex'}}>
                    {renderTab(allMenu)}
                </div>
                <Styles.TabContainer>
                    <Styles.ActiveLine active={activeKey} />
                </Styles.TabContainer>
                <PageDetail active={activeKey} />
            </Styles.Card>
        </Styles.Container>
    )
}