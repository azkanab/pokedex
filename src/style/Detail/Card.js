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
`

export const PokemonImg = styled.img`
    border-radius: 50%;
    width: 240px;
    margin-top: -120px;
`

export const PokemonName = styled.p`
    font-family: 'Poppins-Bold';
    color: #424749;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const PokemonID = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #6e7679;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 16px;
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
    &:hover {
        background-color: #3544b5;
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
    &:hover {
        background-color: #f9f9f9;
        color: #3544b5;
        border: 1.5px solid #3544b5;
    }
`

export const PokeBallButton = styled.img`
    width: 20px;
    margin-right: 8px;
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