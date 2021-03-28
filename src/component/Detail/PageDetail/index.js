import About from './About'
import Stats from './Stats'
import Evolution from './Evolution'
import Move from './Move'

export default function PageDetail({ active }) {
    return (
        active === 'about' ?
            <About />
        : active === 'stats' ?
            <Stats />
        : active === 'evolution' ?
            <Evolution />
        :   
            <Move />
    )
}