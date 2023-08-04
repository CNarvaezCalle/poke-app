import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import '../components/PokedexPage/styles/PokedexPage.css'
import PokeHeader from "./PokeHeader"
import SelectType from "../components/PokedexPage/SelectType"
import Pages from "../components/PokedexPage/Pages"
import PageNotFound from "./PageNotFound"
import '../components/PokedexPage/styles/PageNotFound.css'


const PokedexPage = () => {
  const [inputValue, setInputValue] = useState()
  const [selectValue, setSelectValue] = useState('allPokemons')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const lastPage = startIndex / itemsPerPage + 1

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000/'
  const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

  useEffect(() =>{
    if(selectValue === 'allPokemons'){
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef() 



  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  

  const callbackFilter = (poke) => poke.name.includes(inputValue)



  return (
    <div className="pokedex__container">
      <PokeHeader />
      <section className="pokedex__wrapper">
      <div className="pokedex__header">
        <p className="pokedex__greeting">Welcome <span className="pokedex__name">{trainer}</span>, here you can find information about your favourite Pokemon</p>
        <div className="pokedex__value">
            <form className="pokedex__search__container" onSubmit={handleSubmit}>
            <input className="pokedex__input" ref={inputSearch} type="text" placeholder="Gotta catch 'em all!"/>
            <button className="pokedex__button">Search</button>
            </form>
            <SelectType setSelectValue={setSelectValue}/>
         </div>
      </div>
      <div className="pokedex__cards">
        {
          inputValue ? 
          // pokemons?.results.filter(callbackFilter).lenght == 0 ?
          // <PageNotFound /> problema: no puedo volver a buscar sin tener que regresar a la pagina anterior
          // :
          pokemons?.results.filter(callbackFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
          : 
          pokemons?.results.slice(startIndex, endIndex).map(poke => ( 
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))

        }
      </div>
      </section>
      <Pages 
        pokemons={pokemons}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        endIndex={endIndex}
      />
    </div>
  )
}

export default PokedexPage