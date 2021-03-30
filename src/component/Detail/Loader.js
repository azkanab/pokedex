import * as Styles from '../../style/Detail/Loader'

export default function Loader() {
    return (
        <Styles.Modal>
            <Styles.LoadingContainer>
                <Styles.PokeBallLoading src='/pokeball.png' />
                <Styles.LoadingText>Loading your Pokémon</Styles.LoadingText>
            </Styles.LoadingContainer> 
        </Styles.Modal>       
    )
}