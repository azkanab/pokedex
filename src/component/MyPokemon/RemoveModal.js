import { useState } from 'react'
import * as Styles from '../../style/MyPokemon/RemoveModal'

export default function RemoveModal({ handleRemove, handleCancel, pokemon, setShowModal }) {
    const [success, setSuccess] = useState(false)

    const handleSubmit = () => {
        setSuccess(true)
        handleRemove()
    }

    const handleClose = () => {
        setShowModal(false)
        handleCancel()
    }
    
    return (
        <Styles.Modal>
            {!success ?
                <Styles.ModalContent>
                    <Styles.PokemonImage src={pokemon.details.sprites.front_default} />
                    <Styles.TitleModal>Confirmation</Styles.TitleModal>
                    <Styles.SubTitleModal>Are you sure you want to release {pokemon.name}?</Styles.SubTitleModal>
                    <Styles.ButtonContainer>
                        <Styles.TryAgainButton onClick={handleSubmit}>Yes</Styles.TryAgainButton>
                        <Styles.CancelButton onClick={handleClose}>Cancel</Styles.CancelButton>
                    </Styles.ButtonContainer>
                </Styles.ModalContent>
            :
                <Styles.ModalContent>
                    <Styles.PokemonImage src={pokemon.details.sprites.front_default} />
                    <Styles.TitleModal>Success</Styles.TitleModal>
                    <Styles.SubTitleModal>You have successfully set {pokemon.name} free</Styles.SubTitleModal>
                    <Styles.ButtonContainer>
                        <Styles.TryAgainButton onClick={handleClose}>Close</Styles.TryAgainButton>
                    </Styles.ButtonContainer>
                </Styles.ModalContent>
            }
        </Styles.Modal>
    )
}