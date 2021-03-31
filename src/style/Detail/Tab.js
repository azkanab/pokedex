import styled from '@emotion/styled'

export const Container = styled.div`
    flex: 1;
    width: fit-content;
    cursor: pointer;
    position: relative;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 386px) {
        &:hover {
            transform: scale(1.05);
        }
    }
    @media (max-width: 328px) {
        &:hover {
            transform: scale(1);
        }
    }
`

export const MainText = styled.p`
    font-family: 'Poppins-SemiBold';
    color: ${props =>
        props.isActive === true ? '#424749'
    : '#6e7679'};
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    transition: all 300ms;
    &:hover {
        color: #424749;
    }
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