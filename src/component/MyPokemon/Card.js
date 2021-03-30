import { useEffect } from 'react'
import * as Styles from '../../style/MyPokemon/Card'
import uppercaseText from '../../utils/uppercaseText'
import changeNumberDigit from '../../utils/changeNumberDigit'
import { removeItemAtIndex } from '../../utils/changeItem'

export default function Card({ pokemon, index, myPokemonList, setMyPokemon }) {
    const renderType = (types) => {
        return(
            types.map((type, i) => (
                <Styles.TypeBox key={i} type={type.type.name}>
                    <Styles.TypeText type={type.type.name}>
                        {uppercaseText(type.type.name)}
                    </Styles.TypeText>
                </Styles.TypeBox>
            ))
        )
    }

    const renderAbilities = (abilities) => {
        var result = ''
        abilities.map((ability, i) => {
            if (i !== abilities.length-1) {
                result += ability.ability.name+', '
            } else {
                result += ability.ability.name
            }
        })
        return result
    }

    const handleRemove = () => {
        var newPokemonList = removeItemAtIndex(myPokemonList, index)
        setMyPokemon(newPokemonList)
    }

    useEffect(() => {
        console.log(pokemon)
    },[])
    return (
        <Styles.Card>
                <Styles.PokemonImg src={pokemon.details.sprites.front_default} />
                <Styles.PokemonNickname>{pokemon.name}</Styles.PokemonNickname>
                <Styles.PokemonName>{uppercaseText(pokemon.details.name)}&nbsp;(#{changeNumberDigit(pokemon.details.id)})</Styles.PokemonName>
                <Styles.TypeItemContainer>
                    {renderType(pokemon.details.types)}
                </Styles.TypeItemContainer>
                <Styles.PokemonName>Abilities: {renderAbilities(pokemon.details.abilities)}</Styles.PokemonName>
                <Styles.ButtonContainer>
                    <Styles.RemoveButton onClick={handleRemove}>Remove</Styles.RemoveButton>
                </Styles.ButtonContainer>
        </Styles.Card>
    )
}