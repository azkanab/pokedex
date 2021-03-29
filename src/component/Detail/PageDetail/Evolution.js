import { useEffect, useState } from 'react'
import EvolutionGroup from './EvolutionPage/EvolutionGroup'

export default function Evolution({ pokemon }) {
    const [evolutionID, setEvolutionID] = useState(null)

    useEffect(() => {
        fetch(pokemon.species.url)
            .then(res => res.json())
            .then((result) => {
                var url = new URL(result.evolution_chain.url)
                var path = url.pathname.split('/')
                setEvolutionID(path[path.length-2])
            }, (error) => {
                console.log('Error '+error.message)
            })
    }, [])

    return (
        evolutionID && <EvolutionGroup evolutionID={evolutionID} />
    )
}