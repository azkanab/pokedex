import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Detail from './component/Detail'

export default function App() {
    return (
        <HashRouter>
            <Navbar />
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail/:pokemonName' component={Detail}></Route>
            <Route exact path='/my-pokemon'></Route>
        </HashRouter>
    )
}