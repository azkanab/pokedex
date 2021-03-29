import { useState, useEffect } from 'react'
import * as Styles from '../../../../style/Detail/PageDetail/Stats'

export default function Bar({ data, maxValue }) {
    const [percentage, setPercentage] = useState(0)

    let translateName = new Map([
        ['hp', 'HP'],
        ['attack', 'ATK'],
        ['defense', 'DFS'],
        ['special-attack', 'SATK'],
        ['special-defense', 'SDFS'],
        ['speed', 'SPD']
    ])
    
    useState(() => {
        setPercentage((data.base_stat/maxValue)*100)
    }, [])
    
    return (
        <Styles.Container>
            <Styles.NameContainer>
                <Styles.NameLabel>{translateName.get(data.stat.name)}</Styles.NameLabel>
            </Styles.NameContainer>
            <Styles.BarContainer>
                <Styles.Bar percentage={percentage}>
                    <Styles.ValueLabel>{data.base_stat}</Styles.ValueLabel>
                </Styles.Bar>
            </Styles.BarContainer>
        </Styles.Container>
    )
}