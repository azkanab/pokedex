import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { pokeTypeState } from '../../state/pokeType'
import uppercaseText from '../../utils/uppercaseText'
import * as Styles from '../../style/Detail/Detail'
import Card from './Card'
import Loader from './Loader'
import Error from './Error'

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            abilities {
                ability {
                    name
                }
            }
            moves {
                move {
                    name
                }
                version_group_details {
                    level_learned_at
                }
            }
            types {
                type {
                    name
                }
            }
            message
            status
            stats {
                base_stat
                effort
                stat {
                    url
                    name
                }
            }
            sprites {
                front_default
            }
            height
            weight
            species {
                url
                name
            }
        }
    }
`

export default function Detail() {
    let { pokemonName } = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [pokemonDetail, setPokemonDetail] = useState({
        id: '',
        name: '',
        abilities: [],
        moves: [],
        types: [],
        message: '',
        status: '',
        stats: [],
        sprites: {
            front_default: ''
        },
        height: 0,
        weight: 0,
        species: {
            url: '',
            name: ''
        }
    })
    const [pokemonType, setPokemonType] = useRecoilState(pokeTypeState)

    var { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: {"name": pokemonName}
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
            setPokemonDetail(data.pokemon)
            setPokemonType({type: data.pokemon.types[0].type.name})
            setIsLoading(false)
            document.title = 'Pok??dex | '+uppercaseText(data.pokemon.name)
            setErrorMessage('')
        }

        window.scrollTo(0,0)
    }, [loading, error, data])

    useEffect(() => {
        return () => setPokemonType({type: ''})
    }, [])

    return (
        <Styles.Container type={!isLoading ? pokemonType.type : ''}>
            {!isLoading && errorMessage === '' ?
            <div>
                <Card pokemon={pokemonDetail} />
            </div>:
            isLoading ?
                <Loader />
            : errorMessage !== ''
            ?
                <Error errorMessage={errorMessage} />
            : ''}
        </Styles.Container>
    )
}