import { Link } from "react-router-dom"
import PokeHeader from "./PokeHeader"
import '../components/PokedexPage/styles/Page404.css'

const Page404 = () => {
  return (
    <section className="page404__wrapper">
    <PokeHeader />
    <h1 className="page404__message">This page is not found, please return home <Link to='/'>Home</Link></h1>
    <img src="/pika_sad.gif" alt=""  className="page404__img"/>
    </section>
  )
}

export default Page404