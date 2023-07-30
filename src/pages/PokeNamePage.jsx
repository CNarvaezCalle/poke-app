import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokeNamePage = () => {


  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getSinglePokemon ] = useFetch(url)

  useEffect(()=>{
    getSinglePokemon()
  },[name])


  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeNamePage