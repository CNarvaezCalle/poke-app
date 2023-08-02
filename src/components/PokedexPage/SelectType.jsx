import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({ setSelectValue }) => {

 
  const url = 'https://pokeapi.co/api/v2/type'

  const [ types, getAllTypes ] = useFetch(url)

  useEffect(() => {
    getAllTypes()
  }, [])


  const handleChange = (e) => {
    setSelectValue(e.target.value)
  }

    return (
    <select className="pokedex__search__container--type" onChange={handleChange}>
      <option  value="allPokemons">Select by type</option>
      {
        types?.results.map(type=>(
          <option className="pokedex__list" key={type.url} value={type.url}>{type.name}</option>
          //OJO ver que significa value
        ))
      }
    </select>
  )
}

export default SelectType