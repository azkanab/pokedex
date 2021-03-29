import { useQuery, gql } from '@apollo/client'
import { useState, useEffect } from 'react'
import * as Styles from '../../../../style/Detail/PageDetail/About'
import uppercaseText from '../../../../utils/uppercaseText'

const GET_ABILITY_DETAIL = gql`
    query ability($ability: String!) {
        ability(ability: $ability) {
            message
            status
            response
            params
        }
    }
`

export default function Ability({ ability }) {
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [detailInfo, setDetailInfo] = useState({
        effect_entries: [{
            effect: '',
            language: {
                name: 'en'
            }
        }, {
            effect: '',
            language: {
                name: 'en'
            }
        }]
    })

    var { loading, error, data } = useQuery(GET_ABILITY_DETAIL, {
        variables: {"ability": ability.ability.name}
    })

    const getEnglishDetail = (effects) => {
        var newEffects = [...effects]
        return newEffects.filter(effect => effect.language.name === 'en')
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
            setDetailInfo(data.ability.response)
        }

    }, [loading, error, data])

    return (
        !isLoading && errorMessage === '' &&
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Styles.SubTitleCard>{uppercaseText(ability.ability.name)}</Styles.SubTitleCard>
                <Styles.Tooltip>
                    ?
                    <Styles.TooltipText data-comp='tooltip'>
                        {getEnglishDetail(detailInfo.effect_entries)[0].short_effect}
                    </Styles.TooltipText>
                </Styles.Tooltip>
            </div>
    )
}