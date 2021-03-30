import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 74px 32px;
    background-color: #f1f1f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    min-height: 100vh;
`

export const Title = styled.p`
    font-size: 24px;
    text-align: center;
    font-family: 'Poppins-Bold';
    color: #424749;
    margin-bottom: 4px;
    margin-top: 24px;
`

export const SubTitle = styled.p`
    font-size: 14px;
    text-align: center;
    font-family: 'Poppins-Regular';
    color: #637679;
    margin-bottom: 32px;
    margin-top: 0px;
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
    outline: none;
    text-align: center;
    margin: auto;
    &:hover {
        background-color: #3544b5;
    }
`

export const NotFoundImg = styled.img`
    margin-top: 16px;
    max-width: 300px;
    width: 30%;
`

export const NotFoundText = styled.p`
    margin-bottom: 0px;
    margin-bottom: 24px;
    font-family: 'Poppins-Regular';
    color: #424749;
    font-size: 16px;
`