import { useState } from 'react'
import * as Styles from '../../../style/Detail/Catch'
import { myPokemonState } from '../../../state/myPokemon'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

export default function SuccessModal({ setShow, pokemon }) {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const [myPokemon, setMyPokemon] = useRecoilState(myPokemonState)

    const handleSubmit = () => {
        var newPokedex = [...myPokemon]
        newPokedex.push({
            date: new Date(),
            name: name,
            details: pokemon
        })
        setMyPokemon(newPokedex)
        setSuccess(true)
    }

    return (
        <Styles.ModalContent>
            {success ?
            <div>
                <Styles.PokemonImage src={pokemon.sprites.front_default} />
                <Styles.TitleModal>{name} has been added</Styles.TitleModal>
                <Styles.SubTitleModal>You can go back or go to your Pokedex</Styles.SubTitleModal>
                <Styles.ButtonContainer>
                    <Link to='/my-pokemon' style={{textDecoration: 'none'}}>
                        <Styles.TryAgainButton>See my Pokedex</Styles.TryAgainButton>
                    </Link>
                    <Styles.CancelButton onClick={() => setShow(false)}>Close</Styles.CancelButton>
                </Styles.ButtonContainer>
            </div>
            :
            <div>
                <Styles.PokemonImage src={pokemon.sprites.front_default} />
                <Styles.TitleModal>You successfully catch the Pokémon</Styles.TitleModal>
                <Styles.SubTitleModal>Please give it a name</Styles.SubTitleModal>
                <Styles.NameInput placeholder="Your Pokémon's name" onChange={(e) => setName(e.target.value)} required />
                <Styles.ButtonContainer>
                    <Styles.TryAgainButton onClick={handleSubmit}>Continue</Styles.TryAgainButton>
                    <Styles.CancelButton onClick={() => setShow(false)}>Cancel</Styles.CancelButton>
                </Styles.ButtonContainer>
            </div>
            }
        </Styles.ModalContent>
    )
}