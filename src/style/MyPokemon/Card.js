import styled from '@emotion/styled'

export const Card = styled.div`
    padding: 10px 10px 16px 10px;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    width: 196px;
    background-color: white;
    border-radius: 30px;
    text-align: center;
`

export const MainText = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
`

export const PokemonNickname = styled(MainText)`
    font-size: 16px;
    color: #424749;
    font-family: 'Poppins-SemiBold';
`

export const PokemonName = styled(MainText)`
    font-size: 13px;
    color: #6e7679;
    font-family: 'Poppins-Regular';
`

export const PokemonImg = styled.img`
    border-radius: 50%;
    margin-top: -50px;
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
`

export const TypeText = styled.p`
    font-family: 'Poppins-Regular';
    color: ${props =>
        props.type === 'ground' || props.type === 'steel' || props.type === 'electric' || props.type === 'grass' || props.type === 'ice' ? '#424749'
        :
    '#FFFFFF'};
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
`

export const TypeItemContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4px;
    margin-bottom: 4px;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 16px;
`

export const RemoveButton = styled.button`
    font-size: 13px;
    font-family: 'Poppins-SemiBold';
    background-color: #CC0000;
    color: #F1F1F2;
    border: 0px;
    border-radius: 10px;
    width: fit-content;
    padding: 5px 10px;
    cursor: pointer;
    align-items: center;
    display: flex;
    outline: none !important;
    text-align: center;
    margin: auto;
    &:hover {
        background-color: #b70000;
    }
`