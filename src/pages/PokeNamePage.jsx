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

  const pokeType = pokemon?.types[0].type.name;

  return (
    <div className="pokemon__container">
      <PokeHeader />
      <div className="pokemon__articles-container">
      <article className="pokemon__article">
     
        <section className="pokemon__wrapper">
        <div className="container">
          <div className={`wrapper__background ${pokemon?.types[0].type.name}-gradient`}>
          <img
            className="pokemon__img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          </div>
        </div>
          <h2
            className={`pokemon__number ${pokemon?.types[0].type.name}-color`}
          >
            # {pokemon?.id}
          </h2>
          <h2 className={`pokemon__name ${pokemon?.types[0].type.name}-color`}>
            {pokemon?.name}
            {/* <span className="name__line"></span> */}
          </h2>
          <section className="pokemon__wh">
            <div className="weight__container">
              <h4 className="pokemon__weight">Weight</h4>
              <span className="pokemon__weight__value">{pokemon?.weight}</span>
            </div>
            <div className="height__container">
              <h4 className="pokemon__height">Height</h4>
              <span className="pokemon__height__value">{pokemon?.height}</span>
            </div>
          </section>
          <section className="pokemon__char">
            <div className="pokemon__type__container">
              <h3 className="pokemon__type">Type</h3>
              <ul className="pokemon__type__list">
                {pokemon?.types.map((typeInfo) => (
                  <li
                    className={`pokemon__types ${typeInfo?.type.name}-background-color`}
                    key={typeInfo?.type.url}
                  >
                    {typeInfo?.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokemon__ability__container">
              <h3 className="pokemon__ability">Abilities</h3>
              <ul className="pokemon__ability__list">
                {pokemon?.abilities.map((abilities) => (
                  <li
                    className="pokemon__abilities"
                    key={abilities?.ability.url}
                  >
                    {abilities?.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
        <section className="pokemon__stats__container">
          <h2 className="pokemon__stats__title">Stats</h2>
          <ul className="pokemon__stats__list">
            {pokemon?.stats.map((status) => (
              <div className="pokemon__stats__wrapper" key={status.stat.url}>
                <div className="container__stats" key={status.stat.url}>
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
      </article>

      <hr className="hr"></hr>

      <article className="pokemon__article">
      <section className="pokemon__movements">
        <h2 className="movements__title">Movements</h2>
        <ul className="movements__list">
          {pokemon?.moves.map((moveList) => (
            <li
              className={`movements__movement ${pokeType}-background`}
              key={moveList.move.url}
            >
              {moveList.move.name}
            </li>
          ))}
        </ul>
    </section>
    </article>
    </div>
    </div>
  );
};

export default PokeNamePage;
