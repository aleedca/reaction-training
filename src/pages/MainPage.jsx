import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/App.css'

function MainPage() {
  const navigate = useNavigate()
  const [type, setType] = useState('colors');
  const [time, setTime] = useState('1');
  const [rounds, setRounds] = useState('10');

  const handleStart = () => {
    const config = {
      type,
      time, 
      rounds
    }
    navigate('/gamepage', {state: config})
  }

  return (
    <div>
      <h1>¡Hola Alexia!</h1>

      <div className='main-page'>
        <label>Tipo</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="numbers">Números</option>
          <option value="colors">Colores</option>
        </select>

        <label>Tiempo en segundos</label>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='4'>4</option>
        </select>

        <label>Rondas</label>
        <select value={rounds} onChange={(e) => setRounds(e.target.value)}>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>

        <button onClick={handleStart}>Iniciar</button>
      </div>
    </div>
  )
}

export default MainPage