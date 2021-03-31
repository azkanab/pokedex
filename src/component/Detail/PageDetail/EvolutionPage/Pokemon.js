import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import * as Styles from '../../../../style/Detail/PageDetail/Evolution'
import uppercaseText from '../../../../utils/uppercaseText'
import changeNumberDigit from '../../../../utils/changeNumberDigit'

const GET_POKEMON_DATA = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            sprites {
                front_default
            }
        }
    }
`

export default function Pokemon({ name }) {
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [pokemonDetail, setPokemonDetail] = useState({
        id: 0,
        img: ''
    })

    var { loading, error, data } = useQuery(GET_POKEMON_DATA, {
        variables: {
            "name": name
        }
    })

    useEffect(() => {
        if (loading) {
            console.log('Loading...')
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }

        if (error) {
            console.log('Error: '+error.message)
            setErrorMessage('Error: '+error.message)
        } else {
            setErrorMessage('')
        }

        if (!loading && !error) {
            setPokemonDetail({
                id: data.pokemon.id,
                img: data.pokemon.sprites.front_default
            })
            setIsLoading(false)
            setErrorMessage('')
        }
    }, [loading, error, data])

    return (
        !isLoading && errorMessage === '' &&
            <div style={{width: '33%', textOverflow: 'ellipsis'}}>
                <Styles.PokemonImage src={pokemonDetail.img} />
                <Styles.PokemonName>{uppercaseText(name)}</Styles.PokemonName>
                <Styles.PokemonID>#{changeNumberDigit(pokemonDetail.id)}</Styles.PokemonID>
            </div>
    )
}