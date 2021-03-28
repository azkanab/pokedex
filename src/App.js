import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Detail from './component/Detail'
import { useEffect } from 'react'

export default function App() {
    useEffect(() => {
        console.log(window.location.pathname)
    }, [window.location.pathname])
    return (
        <HashRouter>
            <Navbar />
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail/:pokemonName' component={Detail}></Route>
            <Route exact path='/my-pokemon'></Route>
        </HashRouter>
    )
}