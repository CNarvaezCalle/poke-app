import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"

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
    <div>
      <p><span>Welcome {trainer}</span>, here you can find information about your favourite Pokemon</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <div>
        {
          pokemons?.results.filter(callbackFilter).map(poke => (
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