import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTrainerG } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

  const trainer = useSelector((reducer) => reducer.trainer)
  console.log(trainer)

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // e.target.inputTrainer.value (sin useRef)
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }



  return (
    <div>
      <h2>Hello Trainer</h2>
      <p>To start the app, give me your name trainer 🍧</p>
      <form onSubmit={handleSubmit}>
        <input id='inputTrainer' ref={inputTrainer} type="text" />
        <button>Gotta catch 'em all!</button>
      </form>
    </div>
  )
}

export default HomePage