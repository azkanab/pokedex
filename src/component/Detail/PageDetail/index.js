import About from './About'
import Stats from './Stats'
import Evolution from './Evolution'
import Move from './Move'

export default function PageDetail({ active, data }) {
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