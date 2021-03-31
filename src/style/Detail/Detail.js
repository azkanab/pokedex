import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 58px 32px;
    background-color: #F1F1F2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    min-height: 100vh;
    @media (max-width: 419px) {
        padding: 58px 16px;
    }
    @media (max-width: 386px) {
        padding: 38px 16px;
    }
    @media (max-width: 328px) {
        padding: 18px 16px;
    }
`