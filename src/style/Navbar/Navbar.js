import styled from '@emotion/styled'

export const Navbar = styled.div`
    background-color: #F1F1F2;
    padding: 10px 32px;
    width: calc(100% - 64px);
    position: fixed;
    z-index: 1;
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
`