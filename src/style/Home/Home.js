import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 74px 16px;
    background-color: #f1f1f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    min-height: 100vh;
    @media (max-width: 419px) {
        padding: 74px 8px;
    }
`

export const Text = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`

export const Title = styled(Text)`
    font-size: 24px;
    text-align: center;
    font-family: 'Poppins-Bold';
    color: #424749;
    margin-bottom: 4px;
    @media (max-width: 386px) {
        font-size: 22px;
    }
    @media (max-width: 328px) {
        font-size: 20px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
`

export const SubTitle = styled(Text)`
    font-size: 14px;
    text-align: center;
    font-family: 'Poppins-Regular';
    color: #637679;
    margin-bottom: 48px;
    @media (max-width: 386px) {
        margin-bottom: 24px;
    }
    @media (max-width: 360px) {
        font-size: 13px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
        margin-bottom: 32px;
    }
`