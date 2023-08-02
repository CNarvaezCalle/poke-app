import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import '../components/PokedexPage/styles/HomePage.css'

const HomePage = () => {
  const trainer = useSelector((reducer) => reducer.trainer);
  console.log(trainer);

  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.inputTrainer.value (sin useRef)
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className="home__container">
      <img className="home__logo" src="/pokedex.png" alt="" />
      <h2 className="home__greeting">Hello Trainer</h2>
      <p className="home__message">Gotta catch 'em all </p>
      <form className="home__form" onSubmit={handleSubmit}>
        <input id="inputTrainer" ref={inputTrainer} placeholder="What's your name, trainer?" type="text" />
        <button className="home__button">Lets Go!</button>
      </form>
      <footer className="home__footer">
        <img className="home__background" src="/main_poke.png" alt="" />
      </footer>
    </div>
  );
};

export default HomePage;
