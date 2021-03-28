import styled from '@emotion/styled'

export const Container = styled.div`
    flex: 1;
    width: fit-content;
    cursor: pointer;
    position: relative;
    &:hover {
        transform: scale(1.1);
    }
`

export const MainText = styled.p`
    font-family: 'Poppins-SemiBold';
    color: ${props =>
        props.isActive === true ? '#424749'
    : '#6e7679'};
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 0px;
    transition: all 300ms;
    &:hover {
        color: #424749;
    }
`