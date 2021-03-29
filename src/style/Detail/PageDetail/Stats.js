import styled from '@emotion/styled'

export const MainContainer = styled.div`
    padding: 8px 6% 8px 6%;
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
`

export const NameLabel = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #424749;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
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
`

export const BarGroupContainer = styled.div`
    margin-bottom: 24px;
`