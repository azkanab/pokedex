import { useState } from 'react'
import * as Styles from '../../../style/Detail/Catch'
import { myPokemonState } from '../../../state/myPokemon'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import validateName from '../../../utils/validateName'

export default function SuccessModal({ setShow, pokemon }) {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const [myPokemon, setMyPokemon] = useRecoilState(myPokemonState)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = () => {
        var errorMessageName = validateName(myPokemon, name)
        setErrorMessage(errorMessageName)
        if (errorMessageName === '') {
            var newPokedex = [...myPokemon]
            newPokedex.push({
                id: newPokedex.length+1,
                date: new Date(),
                name: name,
                details: pokemon
            })
            setMyPokemon(newPokedex)
            setSuccess(true)
        }
    }

    return (
        <Styles.ModalContent>
            {success ?
            <div>
                <Styles.PokemonImage src={pokemon.sprites.front_default} />
                <Styles.TitleModal>{name} has been added</Styles.TitleModal>
                <Styles.SubTitleModal>You can go back or go to your Pokédex</Styles.SubTitleModal>
                <Styles.ButtonContainer>
                    <Link to='/my-pokemon' style={{textDecoration: 'none'}}>
                        <Styles.TryAgainButton>See my Pokédex</Styles.TryAgainButton>
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
                <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
                <Styles.ButtonContainer>
                    <Styles.TryAgainButton onClick={handleSubmit}>Continue</Styles.TryAgainButton>
                    <Styles.CancelButton onClick={() => setShow(false)}>Cancel</Styles.CancelButton>
                </Styles.ButtonContainer>
            </div>
            }
        </Styles.ModalContent>
    )
}