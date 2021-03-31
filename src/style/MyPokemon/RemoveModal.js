import styled from '@emotion/styled'

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    text-align: center;
`

export const ModalContent = styled.div`
    background-color: #fefefe;
    padding: 24px;
    width: 30%;
    margin: auto;
    border-radius: 10px;
    @media (max-width: 870px) {
        width: 50%;
    }
    @media (max-width: 480px) {
        width: 70%;
    }
    @media (max-width: 380px) {
        width: 80%;
    }
    @media (max-width: 328px) {
        padding: 24px 15px;
    }
`

export const PokemonImage = styled.img`
    width: 40%;
    height: auto;
    margin-bottom: 16px;
`

export const TitleModal = styled.p`
    margin-top: 0px;
    margin-bottom: 4px;
    color: #424749;
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 15px;
    }
    @media (max-width: 328px) {
        font-size: 14px;
    }
`

export const SubTitleModal = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    color: #6e7679;
    font-family: 'Poppins-Regular';
    font-size: 13px;
    @media (max-width: 328px) {
        font-size: 12px;
    }
`

export const ButtonContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 24px;
`

export const TryAgainButton = styled.button`
    padding: 8px 20px;
    font-size: 14px;
    font-family: 'Poppins-SemiBold';
    background-color: #3B4CCA;
    color: #F1F1F2;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    display: flex;
    outline: none !important;
    &:hover {
        background-color: #3544b5;
    }
    @media (max-width: 386px) {
        padding: 5px 16px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
`

export const CancelButton = styled.button`
    padding: 6.5px 13.5px;
    font-size: 14px;
    font-family: 'Poppins-SemiBold';
    background-color: transparent;
    border: 1.5px solid #3B4CCA;
    opacity: 1;
    color: #3B4CCA;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 8px;
    outline: none !important;
    &:hover {
        background-color: #f9f9f9;
        color: #3544b5;
        border: 1.5px solid #3544b5;
    }
    @media (max-width: 386px) {
        padding: 3.5px 14.5px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
`