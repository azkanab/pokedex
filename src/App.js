import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'

export default function App() {
    return (
        <HashRouter>
            <Navbar />
            <div className='container'>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/detail'></Route>
                <Route exact path='/my-pokemon'></Route>
            </div>
        </HashRouter>
    )
}