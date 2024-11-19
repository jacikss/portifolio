import React, { useState, useEffect } from 'react';
import { generateSecret, checkGuess, logAttempt } from '../utils/logicadojogo';

const Game = () => {
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [resultMessage, setResultMessage] = useState('');
  const [hasWon, setHasWon] = useState(false); // Estado para controle do popup
  const [secretCode, setSecretCode] = useState(''); // Estado para o código secreto

  useEffect(() => {
    // Gera o código secreto apenas uma vez, na primeira renderização
    setSecretCode(generateSecret());
  }, []); // O array vazio garante que este efeito será executado apenas uma vez

  useEffect(() => {
    // Exibe o popup de acerto quando o jogador ganha
    if (hasWon) {
      alert('Parabéns! Você acertou o código!');
      setHasWon(false); // Reseta o estado após o popup
    }
  }, [hasWon]); // Efeito será acionado sempre que hasWon mudar

  const handleSubmit = () => {
    if (guess === secretCode) {
      setHasWon(true); // Define que o jogador ganhou
    }

    const result = checkGuess(guess, secretCode);
    logAttempt(guess, result, setAttempts);
    setGuess('');
    
    // Atualiza a mensagem de resultado
    setResultMessage(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
  };

  const handleInputChange = (e) => setGuess(e.target.value);

  const handleShowResult = () => {
    // Exibe a combinação aleatória (código secreto) em um alert
    alert(`A combinação secreta é: ${secretCode}`);
  };

  return (
    <main>
      <section className="game-container">
        <h1>Jogo Senha (Bulls and Cows)</h1>
        <p>Descubra a combinação de 4 números!</p>

        <div className="game-input">
          <input
            id="guess-input"
            type="text"
            placeholder="Digite 4 números"
            value={guess}
            onChange={handleInputChange}
            maxLength="4"
          />
          <button onClick={handleSubmit} id="submit-btn">Enviar</button>
        </div>

        <div className="game-log">
          <h2>Tentativas Anteriores</h2>
          <ul id="attempts-list">
            {/* As tentativas mais recentes ficam no topo (não estamos mais alterando o estado diretamente) */}
            {attempts.map((attempt, index) => (
              <li key={index}>
                {`Palpite: ${attempt.guess} | Bulls: ${attempt.result.bulls}, Cows: ${attempt.result.cows}`}
              </li>
            ))}
          </ul>
        </div>

        <div className="result-container">
          <p>{resultMessage}</p>
          <button onClick={handleShowResult} id="show-result-btn">Mostrar Combinação</button>
        </div>
      </section>
    </main>
  );
}

export default Game;