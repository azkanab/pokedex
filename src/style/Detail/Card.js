import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    text-align: center;
`

export const Card = styled.div`
    padding: 10px;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    background-color: #ffffff;
    border-radius: 20px;
    max-width: 50vw;
    width: 100%;
    transition: 0.3s;
    @media (max-width: 870px) {
        max-width: 70vw;
    }
    @media (max-width: 480px) {
        max-width: 90vw;
    }
    @media (max-width: 380px) {
        max-width: 100vw;
    }
`

export const PokemonImg = styled.img`
    border-radius: 50%;
    width: 240px;
    margin-top: -120px;
    @media (max-width: 386px) {
        width: 200px;
        margin-top: -100px;
    }
    @media (max-width: 328px) {
        width: 160px;
        margin-top: -80px;
    }
`

export const PokemonName = styled.p`
    font-family: 'Poppins-Bold';
    color: #424749;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
    @media (max-width: 386px) {
        font-size: 20px;
    }
    @media (max-width: 328px) {
        font-size: 18px;
    }
    @media (max-width: 300px) {
        font-size: 16px;
    }
`

export const PokemonID = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #6e7679;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
    @media (max-width: 328px) {
        font-size: 13px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
    }
`

export const ButtonContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    margin-bottom: 32px;
`

export const CatchButton = styled.button`
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
    @media (max-width: 349px) {
        font-size: 13px;
        padding: 8px 8px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
        padding: 8px 8px;
    }
`

export const SeeMoreButton = styled.button`
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
    @media (max-width: 349px) {
        font-size: 13px;
        padding: 8px 12px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
        padding: 8px 8px;
    }
`

export const PokeBallButton = styled.img`
    width: 20px;
    margin-right: 8px;
    @media (max-width: 292px) {
        width: 18px;
        margin-right: 4px;
    }
`

export const TabContainer = styled.div`
    position: relative;
    margin-bottom: 32px;
`

export const ActiveLine = styled.hr`
    border: 2px solid #3B4CCA;
    border-radius: 5px;
    width: 12.5%;
    transition: all 300ms ease;
    position: absolute;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    left: ${props =>
        props.active === 'about' ? '6.25%' :
        props.active === 'stats' ? '31.25%' :
        props.active === 'evolution' ? '56.25%' :
        '81.25%'
    };
`