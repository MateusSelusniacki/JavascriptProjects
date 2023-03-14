// seletores de elementos HTML
const cells = document.querySelectorAll(".cell");
const divMessage = document.querySelector('#message')
const message = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");
const playAgainButton = document.querySelector("#playAgain")

// variáveis de controle do jogo
let currentPlayer = "X";
let gameBoard = ["A", "", "", "", "", "", "", "", "", ""];

// funções auxiliares
const checkWin = () => {
  // todas as possíveis combinações de vitória
  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  // verifica se alguma das combinações de vitória foi alcançada
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      gameBoard[a] !== "" &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    ) {
      return gameBoard[a];
    }
  }
  console.log(gameBoard)
  // verifica se ainda há jogadas disponíveis
  if (gameBoard.includes("")) {
    return null;
  }

  // empate
  return "tie";
};

const showPlayAgain = () => {
    divMessage.classList.remove('hide')
    divMessage.classList.add('show')
}

const hidePlayAgain = () => {
    divMessage.classList.remove('show')
    divMessage.classList.add('hide')
}

const updateMessage = () => {
  const winner = checkWin();
  if (winner === "tie") {
    console.log('empate')
    message.textContent = "Empate!";
    showPlayAgain()
  } else if (winner) {
    message.textContent = `O jogador ${winner} venceu!`;
    showPlayAgain()
  } else {
    message.textContent = `É a vez do jogador ${currentPlayer}`;
  }
  
};

const resetBoard = () => {
  // limpa o tabuleiro
  gameBoard = ["", "", "", "", "", "", "", "", ""];

  // limpa os símbolos dos quadrados
  cells.forEach(square => {
    square.textContent = "";
  });

  // redefine o jogador atual
  currentPlayer = "X";

  // atualiza a mensagem de jogo
  updateMessage();
};

const handleClick = event => {
   
  const square = event.target;
  const index = square.dataset.index;
  // verifica se o quadrado já foi marcado
  if (gameBoard[index] !== "" && gameBoard[index] !== undefined) {
    return;
  }

  // marca o quadrado com o símbolo do jogador atual
  gameBoard[index] = currentPlayer;
  square.textContent = currentPlayer;

  // verifica se o jogo acabou
  const winner = checkWin();
  if (winner || winner === "tie") {
    updateMessage();
    return;
  }
  // passa a vez para o próximo jogador
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateMessage();
};

// adiciona event listeners aos elementos HTML
cells.forEach(square => {
  square.addEventListener("click", handleClick);
});

playAgainButton.addEventListener("click", () => {
    hidePlayAgain()
    resetBoard()
})

resetBtn.addEventListener("click", resetBoard);

// inicializa a mensagem de jogo
updateMessage();
