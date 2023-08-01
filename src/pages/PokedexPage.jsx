import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import '../components/PokedexPage/styles/PokedexPage.css'
import PokeHeader from "./PokeHeader"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState()

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=600/'
  const [ pokemons, getAllPokemons ] = useFetch(url)

  useEffect(() =>{
    getAllPokemons()
  }, [])

  const inputSearch = useRef() 



  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const callbackFilter = (poke) => poke.name.includes(inputValue)



  return (
    <div className="pokedex__container">
      <PokeHeader />
      <div className="pokedex__header">
        <p className="pokedex__greeting">Welcome <span className="pokedex__name">{trainer}</span>, here you can find information about your favourite Pokemon</p>
        <form className="pokedex__search__container" onSubmit={handleSubmit}>
          <input className="pokedex__input" ref={inputSearch} type="text" placeholder="Gotta catch 'em all!"/>
          <button className="pokedex__button">Search</button>
        </form>
      </div>
      <div className="pokedex__cards">
        {
          inputValue ? 
          pokemons?.results.filter(callbackFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
          : 
          pokemons?.results.map(poke => ( 
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))

        }
      </div>
    </div>
  )
}

export default PokedexPage