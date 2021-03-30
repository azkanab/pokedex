import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
`

export const LoadingContainer = styled.div`
    margin: auto;
    text-align: center;
`

export const LoadingText = styled.div`
    color: white;
    font-family: 'Poppins-SemiBold';
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 16px;
`

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const PokeBallLoading = styled.img`
    width: 50px;
    animation-name: ${spin};
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`