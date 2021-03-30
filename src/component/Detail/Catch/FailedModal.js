import * as Styles from '../../../style/Detail/Catch'

export default function FailedModal({ setShow, setSuccess, setTry, data }) {

    const handleTry = () => {
        setSuccess(null)
        setTry(!data)
    }

    return (
        <Styles.ModalContent>
            <Styles.PokemonImage src='/pissed_pikachu.png' />
            <Styles.TitleModal>Failed to catch the Pokémon</Styles.TitleModal>
            <Styles.SubTitleModal>Please try again</Styles.SubTitleModal>
            <Styles.ButtonContainer>
                <Styles.TryAgainButton onClick={handleTry}>Try again</Styles.TryAgainButton>
                <Styles.CancelButton onClick={() => setShow(false)}>Cancel</Styles.CancelButton>
            </Styles.ButtonContainer>
        </Styles.ModalContent>
    )
}