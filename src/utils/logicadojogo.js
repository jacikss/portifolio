export const generateSecret = () => {
    let secret = "";
    while (secret.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (!secret.includes(digit)) secret += digit;
    }
    return secret;
  };
  
  // Função para verificar o palpite
  export const checkGuess = (guess, secretCode) => {
    let bulls = 0;
    let cows = 0;
  
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(guess[i])) {
        cows++;
      }
    }
  
    return { bulls, cows };
  };
  
  // Função para exibir tentativas na lista
  export const logAttempt = (guess, result, setAttempts) => {
    setAttempts(prevAttempts => [
      { guess, result },
      ...prevAttempts
    ]);
  };