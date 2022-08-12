import './App.css'
import {HashRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import Config from './components/Config'
import ProtectedRoutes from './components/ProtectedRuotes'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <img className='circle-vector' src="https://mypokedex101.netlify.app/static/media/pokeball.81cfacf9.png" alt="" />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:id' element={<PokedexDetail/>}/>
            <Route path='/config' element={<Config/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
