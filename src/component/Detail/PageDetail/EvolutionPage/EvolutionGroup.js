import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import EvolutionItem from './EvolutionItem'
import * as Styles from '../../../../style/Detail/PageDetail/Evolution'

const GET_POKEMON_EVOLUTION_CHAIN = gql`
    query evolutionChain($id: String!) {
        evolutionChain(id: $id) {
            message
            status
            response
            params
        }
    }
`

export default function EvolutionGroup({ evolutionID, isLoading, setIsLoading }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [evolutionChain, setEvolutionChain] = useState([{
        name: 'loading',
        min_level: 0,
        phase: 0 
    }, {
        name: 'loading',
        min_level: 0,
        phase: 0 
    }, {
        name: 'loading',
        min_level: 0,
        phase: 0 
    }, {
        name: 'loading',
        min_level: 0,
        phase: 0 
    }])

    var { loading, error, data } = useQuery(GET_POKEMON_EVOLUTION_CHAIN, {
        variables: {"id": evolutionID}
    })

    const getEvolutionChain = (chains=null, phase=1) => {
        var result = []

        if (!chains) {
            return
        }

        const { evolution_details, evolves_to, species } = chains

        result.push({
            name: species.name,
            min_level: evolution_details[0] ? evolution_details[0].min_level : 0,
            phase: phase
        })

        evolves_to.forEach((evolve) => {
            result = result.concat(getEvolutionChain(evolve, phase+1))
        })

        return result
    }

    const renderEvolution = (evolutions) => {
        var result = []
        var currentPhase = 1
        var currentIdx = 0
        var previousPhase = 0
        var previousIdx = 0

        evolutions.map((evolution, idx) => {
            if (evolution.phase !== currentPhase) {
                previousPhase = currentPhase
                currentPhase = evolution.phase

                previousIdx = currentIdx
                currentIdx = idx
            }

            if (currentIdx !== 0) {
                result.push(
                    <EvolutionItem key={idx} data={{pokeBefore: evolutions[previousIdx], pokeAfter: evolution}} />
                )
            }
        })

		return result
    }

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
            var chain = data.evolutionChain.response.chain
            var evolution_chains = getEvolutionChain(chain, 1)
            setEvolutionChain(evolution_chains)
            setIsLoading(false)
            setErrorMessage('')
        }

        return () => {
            setEvolutionChain([])
        }
    }, [loading, error, data])

    return (
        <Styles.Container>
            {!isLoading && errorMessage === '' ? 
                renderEvolution(evolutionChain)
            : ''}
        </Styles.Container>
    )
}