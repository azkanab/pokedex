import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Container = styled.div`
    padding: 0px 6% 16px 6%;
    @media (max-width: 386px) {
        padding: 0px 6% 16px 6%;
    }
    @media (max-width: 328px) {
        padding: 0px 3% 16px 3%;
    }
`

export const PokemonImage = styled.img`
    @media (max-width: 386px) {
        width: 75px
    }
    @media (max-width: 328px) {
        width: 55px
    }
`

export const PokemonName = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    color: #424749;
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`

export const PokeLevel = styled.p`
    font-family: 'Poppins-SemiBold';
    font-size: 13px;
    color: #6e7679;
    margin-top: 0px;
    margin-bottom: 0px;
    @media (max-width: 386px) {
        font-size: 12px;
    }
    @media (max-width: 328px) {
        font-size: 11px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
`

export const Arrow = styled(PokeLevel)`
    font-size: 24px;

    @media (max-width: 386px) {
        font-size: 20px;
    }
    @media (max-width: 328px) {
        font-size: 16px;
    }
`

export const PokemonID = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6e7679;
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`

export const Card = styled.div`
    padding: 0px 0px 10px 0px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    background-color: #ffffff;
    border-radius: 20px;
    margin-bottom: 16px;
    box-shadow: 0px 0px 10px 0px rgba(10, 31, 68, 0.1);
`

export const LoadingText = styled.div`
    color: #424749;
    font-family: 'Poppins-SemiBold';
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
    @media (max-width: 328px) {
        font-size: 13px;
    }
`

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const PokeBallLoading = styled.img`
    width: 30px;
    animation-name: ${spin};
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @media (max-width: 386px) {
        width: 42.5px;
    }
    @media (max-width: 328px) {
        width: 35px;
    }
`

export const LoaderErrorContainer = styled.div`
    margin-top: 48px;
`