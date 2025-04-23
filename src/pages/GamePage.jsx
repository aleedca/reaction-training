import '../styles/App.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ColorBox from '../components/ColorBox'

function GamePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const config = location.state || {};

    const type = config.type;
    const time = parseInt(config.time, 10);
    const rounds = parseInt(config.rounds, 10);
    const colors = ['red', 'blue', 'yellow'];

    const [currentColor, setCurrentColor] = useState(colors[0])
    const [currentRound, setCurrentRound] = useState(1);

    useEffect(() => {
        if (currentRound > rounds) return;

        const interval = setInterval(() => {
            if (currentRound > rounds) {
                clearInterval(interval);
                return;
            }

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setCurrentColor(randomColor);
            setCurrentRound((prevRound) => prevRound + 1);
        }, time * 1000);

        return () => clearInterval(interval);
    }, [currentRound, time, rounds, colors]);

    const handleBack = () => {
        navigate('/')
    }
    return (
        <div className="game-page">
          {currentRound <= rounds ? (
            <>
              <h1>Ronda {currentRound} de {rounds}</h1>
              <ColorBox color={currentColor} />
            </>
          ) : (
            <div>
              <h1>¡Juego terminado!</h1>
            </div>
          )}
          <button onClick={handleBack}>Volver</button>
        </div>
      );
}

export default GamePage