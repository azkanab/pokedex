import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 0px 6% 32px 6%;
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    background-color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    width: 50%;
    box-shadow: 0px 0px 10px 0px rgba(10, 31, 68, 0.1);
    @media (max-width: 600px) {
        width: 80%;
    }
`

export const MoveItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0px;
    @media (max-width: 949px) {
        margin-bottom: 8px;
    }
`

export const MoveName = styled.p`
    font-family: 'Poppins-SemiBold';
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 14px;
    color: #424749;
    text-align: end;
    margin-right: 16px;
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 359px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`

export const MoveLevel = styled.p`
    font-family: 'Poppins-SemiBold';
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 14px;
    color: #6e7679;
    text-align: start;
    margin-left: 16px;
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 359px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`

export const SeparatorLine = styled.hr`
    border: 1px solid #3B4CCA;
    height: 30px;
    @media (max-width: 1332px) {
        height: 50px;
    }
`