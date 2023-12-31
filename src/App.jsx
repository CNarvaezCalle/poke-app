import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeNamePage from './pages/PokeNamePage'
import Page404 from './pages/Page404'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {


  return (
    <div className='principal__container'>
      <Routes>
        <Route path='/' element={<HomePage />}/> 
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />}/> 
          <Route path='/pokedex/:name' element={<PokeNamePage />}/> 
        <Route path='*' element={<Page404 />}/> 
        </Route>
      </Routes>
    </div>
  ) 
}

export default App
