import * as Styles from '../../style/Detail/Error'
import { Link } from 'react-router-dom'

export default function Error({ errorMessage }) {
    return (
        <Styles.Modal>
            <Styles.ModalContent>
                <Styles.ErrorImage src='/pissed_pikachu.png' />
                <Styles.TitleModal>Error</Styles.TitleModal>
                <Styles.SubTitleModal>{errorMessage}</Styles.SubTitleModal>
                <Styles.ButtonContainer>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Styles.TryAgainButton>Back to main menu</Styles.TryAgainButton>
                    </Link>
                </Styles.ButtonContainer>
            </Styles.ModalContent>
        </Styles.Modal>
    )
}