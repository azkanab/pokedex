import styled from '@emotion/styled'

export const Navbar = styled.div`
    background-color: #F1F1F2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236e7679' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    padding: 10px 32px;
    width: calc(100% - 64px);
    position: fixed;
    z-index: 1;
    @media (max-width: 419px) {
        padding: 10px 16px;
        width: calc(100% - 32px);
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ImgContainer = styled.div`
    flex: 1;
`

export const TextContainer = styled.div`
    display: flex;
    text-align: end;
`

export const PokemonImg = styled.img`
    height: 35px;
`

export const MainText = styled.p`
    color: #424749;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: ${props => props.active === true ? 'Poppins-Bold' : 'Poppins-Regular'};
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
    margin-right: ${props => props.home ? '20px' : '0px'};
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