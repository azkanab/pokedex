import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 0px 6% 16px 6%;
`

export const Card = styled.div`
    background-color: #30a7d7;
    box-shadow: 0px 0px 10px 0px rgba(10, 31, 68, 0.1);
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 16px;
`

export const Title = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #424749;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
    @media (max-width: 328px) {
        font-size: 13px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
    }
`

export const TitleCard = styled.p`
    font-family: 'Poppins-Regular';
    color: #ffffff;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
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

export const SubTitleCard = styled.p`
    font-family: 'Poppins-SemiBold';
    color: #424749;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    @media (max-width: 386px) {
        font-size: 14px;
    }
    @media (max-width: 328px) {
        font-size: 13px;
    }
    @media (max-width: 300px) {
        font-size: 12px;
    }
`

export const TooltipText = styled.span`
    font-family: 'Poppins-Regular';
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #ffffff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
`

export const Tooltip = styled.div`
    position: relative;
    display: inline-block;
    font-family: 'Poppins-SemiBold';
    color: white;
    background-color: #424749;
    border-radius: 50%;
    height: fit-content;
    padding: 0px 5px;
    font-size: 12px;
    margin-left: 8px;
    cursor: pointer;
    &:hover [data-comp='tooltip'] {
        visibility: visible;
        opacity: 1;
    }
    @media (max-width: 386px) {
        font-size: 11px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
        padding: 0px 4px;
        margin-left: 4px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    text-align: start;
    flex-wrap: wrap;
    gap: 20px 32px;
`

export const ColumnCard = styled.div`
    flex: auto;
`

export const TypeContainer = styled.div`
    text-align: start;
`

export const TypeBox = styled.div`
    background-color: ${props =>
        props.type === 'bug' ? '#719F40' :
        props.type === 'dragon' ? '#F16E58' :
        props.type === 'fairy' ? '#EA3A6D' :
        props.type === 'fire' ? '#FE7D24' :
        props.type === 'ghost' ? '#7C60A2' :
        props.type === 'ground' ? '#B3A255' :
        props.type === 'normal' ? '#A4ABAE' :
        props.type === 'psychic' ? '#F365B8' :
        props.type === 'steel' ? '#9FB7B9' :
        props.type === 'dark' ? '#707070' :
        props.type === 'electric' ? '#EFD535' :
        props.type === 'fighting' ? '#D46724' :
        props.type === 'flying' ? '#35B3D6' :
        props.type === 'grass' ? '#9ACD50' :
        props.type === 'ice' ? '#51C5E7' :
        props.type === 'poison' ? '#B97FC8' :
        props.type === 'rock' ? '#A28C20' :
        props.type === 'water' ? '#4692C3' :
        '#f1f1f2'
    };
    border-radius: 10px;
    width: fit-content;
    padding: 5px 10px;
    margin-right: 8px;
`

export const TypeText = styled.p`
    font-family: 'Poppins-Regular';
    color: ${props =>
        props.type === 'ground' || props.type === 'steel' || props.type === 'electric' || props.type === 'grass' || props.type === 'ice' ? '#424749'
        :
    '#FFFFFF'};
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
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

export const TypeItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`