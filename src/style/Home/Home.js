import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 74px 32px;
    background-color: #f1f1f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    min-height: 100vh;
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
`

export const SubTitle = styled(Text)`
    font-size: 14px;
    text-align: center;
    font-family: 'Poppins-Regular';
    color: #637679;
    margin-bottom: 48px;
`