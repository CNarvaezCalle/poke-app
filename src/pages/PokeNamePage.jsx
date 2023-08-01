import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../components/PokedexPage/styles/PokeNamePage.css";
import PokeHeader from "./PokeHeader";

const PokeNamePage = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getSinglePokemon] = useFetch(url);

  useEffect(() => {
    getSinglePokemon();
  }, [name]);

  console.log(pokemon);

  const pokeType = pokemon?.types[0].type.name 
  console.log(pokeType)

  return (
    <div className="pokemon__container">
      <PokeHeader />
      <section className="pokemon__wrapper">
        <img
          className="pokemon__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <h2 className="pokemon__number"># {pokemon?.id}</h2>
        <h2 className="pokemon__name">{pokemon?.name}</h2>
        <h3>Type</h3>
        <ul>
          {pokemon?.types.map((typeInfo) => (
            <li
              className={`pokemon__types ${typeInfo?.type.name}-color`}
              key={typeInfo?.type.url}
            >
              {typeInfo?.type.name}
            </li>
          ))}
        </ul>
        <h3>Abilities</h3>
        <ul>
          {pokemon?.abilities.map((abilities) => (
            <li>{abilities?.ability.name}</li>
          ))}
        </ul>
      </section>

      <section className="pokemon__stats__container">
        <h2 className="pokemon__stats__title">Stats</h2>
        <ul className="pokemon__stats__list">
          {pokemon?.stats.map((status) => (
            <div className="pokemon__stats__wrapper">
              <div className="container__stats">
                <li className="pokemon__stats__name" key={status.stat.url}>
                  {status.stat.name}
                </li>
                <li className="pokemon__stats__value">
                  {status.base_stat} /200
                </li>
              </div>
              <div className="progress">
                <div
                  key={status.base_stat}
                  className="progress-bar"
                  style={{ width: `${status.base_stat / 2}%` }}
                ></div>
              </div>
            </div>
          ))}
        </ul>
      </section>
      <section className="pokemon__movements">
        <h2 className="movements__title">Movements</h2>
        <ul className="movements__list">
          {pokemon?.moves.map((moveList) => (
            <li className={`movements__movement ${pokeType}-color`} key={moveList.move.url} >
              {moveList.move.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokeNamePage;
