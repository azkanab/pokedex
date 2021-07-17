import * as Styles from '../../style/MyPokemon/MyPokemon'
import { myPokemonState } from '../../state/myPokemon'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import Card from './Card'
import { useEffect, useState } from 'react'
import removeItemAtIndex from '../../utils/changeItem'
import RemoveModal from './RemoveModal'

export default function MyPokemon() {
    const [myPokemon, setMyPokemon] = useRecoilState(myPokemonState)
    const [pokemonRemoved, setPokemonRemoved] = useState({})
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [index, setIndex] = useState(null)
    const renderMyPokemon = (pokemons) => {
        return (
            pokemons.map((pokemon, i) => (
                <Card key={i} index={i} pokemon={pokemon} setShowRemoveModal={setShowRemoveModal} setIndex={setIndex} setRemoved={setPokemonRemoved} />
            ))
        )
    }

    const handleRemove = () => {
        if (index !== null) {
            var newPokemonList = removeItemAtIndex(myPokemon, index)
            setMyPokemon(newPokemonList)
        }
    }

    const handleCancelRemove = () => {
        setIndex(null)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Pokédex | My Pokémon'
    }, [])

    return (
        <Styles.Container>
            <Styles.Title>My Pokémon</Styles.Title>
            <Styles.SubTitle>Here are your Pokémon(s) in your Pokédex</Styles.SubTitle>
            <Styles.ButtonContainer>
                {myPokemon.length === 0 &&
                    <div>
                        <Styles.NotFoundImg src='/AshPikachu.png' />
                        <Styles.NotFoundText>No Pokémon found in your Pokédex</Styles.NotFoundText>
                    </div>
                }
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Styles.CatchButton>{myPokemon.length === 0 ? 'Start catching a Pokémon' : 'Catch more Pokémons'}</Styles.CatchButton>
                </Link>
            </Styles.ButtonContainer>
            <Styles.CardContainer>
                {myPokemon.length > 0 && renderMyPokemon(myPokemon)}
            </Styles.CardContainer>
                {showRemoveModal &&
                    <RemoveModal handleRemove={handleRemove} handleCancel={handleCancelRemove} pokemon={pokemonRemoved} setShowModal={setShowRemoveModal} />
                }
        </Styles.Container>
    )
}