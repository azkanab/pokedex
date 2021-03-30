import { useEffect, useState } from 'react'
import EvolutionGroup from './EvolutionPage/EvolutionGroup'
import * as Styles from '../../../style/Detail/PageDetail/Evolution'

export default function Evolution({ pokemon }) {
    const [evolutionID, setEvolutionID] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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
        <div>
            {isLoading &&
                <Styles.Container>
                    <Styles.LoaderErrorContainer>
                        <Styles.PokeBallLoading src='/pokeball.png' />
                        <Styles.LoadingText>Loading...</Styles.LoadingText>
                    </Styles.LoaderErrorContainer>
                </Styles.Container>}
            {evolutionID && <EvolutionGroup evolutionID={evolutionID} isLoading={isLoading} setIsLoading={setIsLoading} />}
        </div>
    )
}