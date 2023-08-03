import './styles/Page.css'

const Page = ({ pokemons, setCurrentPage, currentPage, endIndex}) => {


    return (
      <div className='button__page-container'>
        <button onClick={() => setCurrentPage(1)} className="button__start">Inicio</button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="button__previous"
        >
          Previous
        </button>
        <span className="current__page">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= pokemons?.results.length}
          className="button__next"
        >
          Next
        </button>
        <button
          onClick={() =>
            setCurrentPage(Math.floor(pokemons?.results.length / 20) + 1)
          }
          disabled={endIndex >= pokemons?.results.length}
          className="button__last"
        >
          Last
        </button>
      </div>
    );
  };
  
  export default Page;