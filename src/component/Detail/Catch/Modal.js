import { useEffect, useState } from 'react'
import * as Styles from '../../../style/Detail/Catch'
import generateSuccess from '../../../utils/generateSuccess'
import uppercaseText from '../../../utils/uppercaseText'
import FailedModal from './FailedModal'
import SuccessModal from './SuccessModal'

export default function Modal({ setShow, data }) {
    const [isSuccess, setIsSuccess] = useState(null)
    const [tryAgain, setTryAgain] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            var success = generateSuccess()
            setIsSuccess(success)
        }, 4000)
    }, [tryAgain])

    return (
        <Styles.Modal>
            {isSuccess === null ?
            <Styles.LoadingContainer>
                <Styles.PokeBallLoading src='/pokeball.png' />
                <Styles.LoadingText>Catching a(n) {uppercaseText(data.name)}...</Styles.LoadingText>
            </Styles.LoadingContainer>
            : isSuccess === false ?
                <FailedModal setShow={setShow} data={tryAgain} setTry={setTryAgain} setSuccess={setIsSuccess} />
            : isSuccess == true ?
                <SuccessModal setShow={setShow} pokemon={data} />
            : ''}
        </Styles.Modal>
    )
}