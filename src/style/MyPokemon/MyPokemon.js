import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 74px 32px;
    background-color: #f1f1f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    min-height: 100vh;
    @media (max-width: 419px) {
        padding: 74px 16px;
    }
`

export const Title = styled.p`
    font-size: 24px;
    text-align: center;
    font-family: 'Poppins-Bold';
    color: #424749;
    margin-bottom: 4px;
    margin-top: 24px;
    @media (max-width: 386px) {
        font-size: 22px;
        margin-top: 16px;
    }
    @media (max-width: 328px) {
        font-size: 20px;
        margin-top: 8px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
        margin-top: 0px;
    }
`

export const SubTitle = styled.p`
    font-size: 14px;
    text-align: center;
    font-family: 'Poppins-Regular';
    color: #637679;
    margin-bottom: 0px;
    margin-top: 0px;
    @media (max-width: 360px) {
        font-size: 13px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 16px;
    justify-content: center;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin-bottom: 72px;
    @media (max-width: 386px) {
        margin-bottom: 48px;
    }
    @media (max-width: 300px) {
        margin-bottom: 48px;
    }
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
    text-align: center;
    margin: auto;
    margin-top: 32px;
    &:hover {
        background-color: #3544b5;
    }
    @media (max-width: 386px) {
        margin-top: 24px;
    }
    @media (max-width: 360px) {
        font-size: 13px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
    @media (max-width: 386px) {
        margin-top: 16px;
    }
`

export const NotFoundImg = styled.img`
    margin-top: 32px;
    max-width: 300px;
    width: 30%;
    min-width: 250px;
    @media (max-width: 300px) {
        width: 100%;
        min-width: 0px;
    }
    @media (max-width: 386px) {
        margin-top: 24px;
    }
    @media (max-width: 300px) {
        margin-top: 16px;
    }
`

export const NotFoundText = styled.p`
    margin-top: 16px;
    margin-bottom: 0px;
    font-family: 'Poppins-Regular';
    color: #424749;
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
    @media (max-width: 328px) {
        font-size: 13px;
    }
`