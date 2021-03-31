import styled from '@emotion/styled'

export const MainContainer = styled.div`
    padding: 0px 6% 16px 6%;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    margin-bottom: 5px;
    align-items: center;
`

export const ValueLabel = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #FFFFFF;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    margin-right: 10px;
    @media (max-width: 560px) {
        margin-right: 6px;
        font-size: 11px;
    }
    @media (max-width: 386px) {
        margin-right: 4px;
        font-size: 12px;
    }
    @media (max-width: 328px) {
        margin-right: 3px;
        font-size: 11px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
`

export const NameLabel = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #424749;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
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

export const NameContainer = styled.div`
    text-align: start;
    width: 50px;
    overflow: scroll;
`

export const Title = styled.p`
    font-size: 1.4em;
    font-weight: 300; 
`

export const Bar = styled.div`
    width: ${props => props.percentage}%;
    height: 20px;
    border-radius: 10px;
    background-color: #30a7d7;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const BarContainer = styled.div`
    width: 100%;
`

export const InfoText = styled.p`
    text-align: end;
    font-family: 'Poppins-Regular';
    color: #6e7679;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 0px;
    @media (max-width: 386px) {
        font-size: 11px;
    }
    @media (max-width: 328px) {
        font-size: 10px;
    }
`

export const BarGroupContainer = styled.div`
    margin-bottom: 24px;
`