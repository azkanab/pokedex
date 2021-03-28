import InfiniteScroll from './InfiniteScroll'
import Card from './Card'
import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import * as Styles from '../../style/Home/Card'

const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            results {
                url
                name
                image
                id
            }
        }
    }
`;

export default function Cards() {
    const [loadingState, setLoadingState] = useState(true)
    const [errorState, setErrorState] = useState(undefined)
    const [isFetching, setIsFetching] = InfiniteScroll(fetchData, loadingState, errorState)
    const [isInitial, setIsInitial] = useState(true)

    const [pokemonList, setPokemonList] = useState([])

    var { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {limit: 36, offset: pokemonList.length}
    }, [pokemonList.length])

    function fetchData() {
        setTimeout(() => {
            setPokemonList(pokemonList.concat(data.pokemons.results))
            setIsFetching(false)
        }, 1000)
    }

    useEffect(() => {
        if (isInitial) {
            if (data) {
                setPokemonList(pokemonList.concat(data.pokemons.results))
                setIsFetching(false)
                setIsInitial(false)
            }
        }
    }, [isInitial, data])

    useEffect(() => {
        setLoadingState(loading)
        setErrorState(error)
    }, [loading, error])

    return (
        <div>
            <Styles.Container>
                {pokemonList.map(pokemon =>
                    <Card key={pokemon.id} pokemon={pokemon}></Card>
                )}
            </Styles.Container>
            {isFetching &&
                <Styles.LoadingContainer>
                    <Styles.LoadingImg src='/pokeball.png' />
                    <Styles.LoadingText>Loading more pokemon...</Styles.LoadingText>
                </Styles.LoadingContainer>
            }
        </div>
    )
}