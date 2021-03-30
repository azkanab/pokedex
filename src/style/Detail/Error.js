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
`

export const ErrorImage = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 16px;
`

export const TitleModal = styled.p`
    margin-top: 0px;
    margin-bottom: 4px;
    color: #424749;
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
`

export const SubTitleModal = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    color: #6e7679;
    font-family: 'Poppins-Regular';
    font-size: 13px;
`

export const ButtonContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 16px;
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
`