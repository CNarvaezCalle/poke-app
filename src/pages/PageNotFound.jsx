import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section className="pnf__wrapper">
    <h2 className="pnf__firstmessage">The pokemon you are looking for does not show any results, please try another name.</h2>
    <img src="/ash_stone.gif" alt=""  className="pnf__img"/>
    <h2 className="pnf__secondmessage">Also if you want to change trainer you can go <Link to='/'>home</Link></h2>
    </section>
  )
}

export default PageNotFound