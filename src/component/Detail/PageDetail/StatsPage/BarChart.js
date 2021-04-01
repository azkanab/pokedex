import { useEffect, useState } from "react"
import Bar from './Bar'
import * as Styles from '../../../../style/Detail/PageDetail/Stats'

export default function BarChart({ stats }) {
    const [data] = useState(stats)

    const maxValue = [
        { name: 'HP', value: 255 },
        { name: 'ATK', value: 181 },
        { name: 'DF', value: 230 },
        { name: 'SATK', value: 173 },
        { name: 'SDEF', value: 230 },
        { name: 'SPD', value: 200 }
    ]

    const renderBar = (data) => {
        return (
            data.map((d, i) => (
                <Bar key={i} data={d} maxValue={maxValue[i].value} />
            ))
        )
    }

    return(
        <Styles.BarGroupContainer>
            {renderBar(data)}
        </Styles.BarGroupContainer>
    )
  }