import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 16px;
    justify-content: center;
    width: 100%;
`

export const Card = styled.div`
    padding: 10px;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    width: 196px;
    background-color: white;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    transition: transform 250ms;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 0px 10px 0px #3B4CCA;
    }
    @media (max-width: 511px) {
        width: 150px;
    }
    @media (max-width: 387px) {
        width: 140px;
    }
    @media (max-width: 367px) {
        width: 130px;
    }
    @media (max-width: 347px) {
        width: 120px;
    }
    @media (max-width: 327px) {
        width: 110px;
    }
    @media (max-width: 307px) {
        width: 150px;
    }
`

export const MainText = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
`

export const PokemonName = styled(MainText)`
    font-size: 16px;
    color: #424749;
    font-family: 'Poppins-SemiBold';
    @media (max-width: 386px) {
        font-size: 15px;
    }
    @media (max-width: 328px) {
        font-size: 14px;
    }
`

export const PokemonID = styled(MainText)`
    font-size: 14px;
    color: #6e7679;
    font-family: 'Poppins-Regular';
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
`

export const PokemonImg = styled.img`
    border-radius: 50%;
    margin-top: -50px;
    @media (max-width: 386px) {
        font-size: 15px;
    }
    @media (max-width: 328px) {
        font-size: 14px;
        width: 86px;
    }
`

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 48px;

`

export const LoadingText = styled(MainText)`
    font-size: 16px;
    color: #6e7679;
    font-family: 'Poppins-SemiBold';
    @media (max-width: 386px) {
        font-size: 15px;
    }
    @media (max-width: 328px) {
        font-size: 14px;
    }
`

const bounce = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }
    
    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }
    
    70% {
        transform: translate3d(0, -15px, 0);
    }
    
    90% {
        transform: translate3d(0,-4px,0);
    }
`

export const LoadingImg = styled.img`
    width: 35px;
    animation: ${bounce} 1s ease infinite;
    margin-right: 16px;
`