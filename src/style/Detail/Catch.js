import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

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
`

export const LoadingContainer = styled.div`
    margin: auto;
    text-align: center;
`

export const LoadingText = styled.div`
    color: white;
    font-family: 'Poppins-SemiBold';
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
`

const spin = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(31deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-31deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(31deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

export const PokeBallLoading = styled.img`
    width: 50px;
    animation-name: ${spin};
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @media (max-width: 386px) {
        width: 42.5px;
    }
    @media (max-width: 328px) {
        width: 35px;
    }
`

export const PokemonImage = styled.img`
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
`

export const CancelButton = styled.button`
    padding: 8px 15px;
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
`

export const NameInput = styled.input`
    margin-top: 16px;
    font-size: 14px;
    font-family: 'Poppins-Regular';
    border-radius: 8px;
    width: calc(100% - 20px);
    padding: 8px 10px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    outline: none;
    &:focus {
        box-shadow: 0 0 10px #719ECE;
        border: 2px solid #719ECE;
    }
`

export const ErrorMessage = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;
    color: #CC0000;
    font-family: 'Poppins-Regular';
    font-size: 12px;
    text-align: start;
`