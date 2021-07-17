import About from './About'
import Stats from './Stats'
import Evolution from './Evolution'
import Move from './Move'
import { KeyContext } from '../Card'
import { useContext } from 'react'

export default function PageDetail({ data }) {
    const active = useContext(KeyContext)
    return (
        active === 'about' ?
            <About pokemon={data} />
        : active === 'stats' ?
            <Stats pokemon={data} />
        : active === 'evolution' ?
            <Evolution pokemon={data} />
        :   
            <Move pokemon={data} />
    )
}