/* fucntion to switch sides , black and white */
/* play as black option handler at main menu */
function changeColor() {
  canvas.style.opacity = "100%";
  gameMenu.style.display = "none";
  startGame = true;
  if (mode == "ai" || mode == "p") {
    color = "b";
    mode = 0;
  }
  if (color == "w") {
    pieces = {
      bP: [
        { img: wP1, pos: { x: 0, y: 1 } },
        { img: wP1, pos: { x: 1, y: 1 } },
        { img: wP1, pos: { x: 2, y: 1 } },
        { img: wP1, pos: { x: 3, y: 1 } },
        { img: wP1, pos: { x: 4, y: 1 } },
        { img: wP1, pos: { x: 5, y: 1 } },
        { img: wP1, pos: { x: 6, y: 1 } },
        { img: wP1, pos: { x: 7, y: 1 } },
      ],
      bK: [{ img: wK1, pos: { x: 3, y: 0 }, move: false }],
      bN: [
        { img: wN1, pos: { x: 1, y: 0 } },
        { img: wN1, pos: { x: 6, y: 0 } },
      ],
      bB: [
        { img: wB1, pos: { x: 2, y: 0 } },
        { img: wB1, pos: { x: 5, y: 0 } },
      ],
      bQ: [{ img: wQ1, pos: { x: 4, y: 0 } }],
      bR: [
        { img: wR1, pos: { x: 0, y: 0 }, move: false },
        { img: wR1, pos: { x: 7, y: 0 }, move: false },
      ],

      wP: [
        { img: bP1, pos: { x: 0, y: 6 } },
        { img: bP1, pos: { x: 1, y: 6 } },
        { img: bP1, pos: { x: 2, y: 6 } },
        { img: bP1, pos: { x: 3, y: 6 } },
        { img: bP1, pos: { x: 4, y: 6 } },
        { img: bP1, pos: { x: 5, y: 6 } },
        { img: bP1, pos: { x: 6, y: 6 } },
        { img: bP1, pos: { x: 7, y: 6 } },
      ],
      wK: [{ img: bK1, pos: { x: 3, y: 7 }, move: 0 }],
      wN: [
        { img: bN1, pos: { x: 1, y: 7 } },
        { img: bN1, pos: { x: 6, y: 7 } },
      ],
      wB: [
        { img: bB1, pos: { x: 2, y: 7 } },
        { img: bB1, pos: { x: 5, y: 7 } },
      ],
      wQ: [{ img: bQ1, pos: { x: 4, y: 7 } }],
      wR: [
        { img: bR1, pos: { x: 0, y: 7 }, move: false },
        { img: bR1, pos: { x: 7, y: 7 }, move: false },
      ],
    };
    turn = "b";
    color = "b";
  } else {
    pieces = {
      bP: [
        { img: bP1, pos: { x: 0, y: 1 } },
        { img: bP1, pos: { x: 1, y: 1 } },
        { img: bP1, pos: { x: 2, y: 1 } },
        { img: bP1, pos: { x: 3, y: 1 } },
        { img: bP1, pos: { x: 4, y: 1 } },
        { img: bP1, pos: { x: 5, y: 1 } },
        { img: bP1, pos: { x: 6, y: 1 } },
        { img: bP1, pos: { x: 7, y: 1 } },
      ],
      bK: [{ img: bK1, pos: { x: 4, y: 0 }, move: false }],
      bN: [
        { img: bN1, pos: { x: 1, y: 0 } },
        { img: bN1, pos: { x: 6, y: 0 } },
      ],
      bB: [
        { img: bB1, pos: { x: 2, y: 0 } },
        { img: bB1, pos: { x: 5, y: 0 } },
      ],
      bQ: [{ img: bQ1, pos: { x: 3, y: 0 } }],
      bR: [
        { img: bR1, pos: { x: 0, y: 0 }, move: false },
        { img: bR1, pos: { x: 7, y: 0 }, move: false },
      ],

      wP: [
        { img: wP1, pos: { x: 0, y: 6 } },
        { img: wP1, pos: { x: 1, y: 6 } },
        { img: wP1, pos: { x: 2, y: 6 } },
        { img: wP1, pos: { x: 3, y: 6 } },
        { img: wP1, pos: { x: 4, y: 6 } },
        { img: wP1, pos: { x: 5, y: 6 } },
        { img: wP1, pos: { x: 6, y: 6 } },
        { img: wP1, pos: { x: 7, y: 6 } },
      ],
      wK: [{ img: wK1, pos: { x: 4, y: 7 }, move: 0 }],
      wN: [
        { img: wN1, pos: { x: 1, y: 7 } },
        { img: wN1, pos: { x: 6, y: 7 } },
      ],
      wB: [
        { img: wB1, pos: { x: 2, y: 7 } },
        { img: wB1, pos: { x: 5, y: 7 } },
      ],
      wQ: [{ img: wQ1, pos: { x: 3, y: 7 } }],
      wR: [
        { img: wR1, pos: { x: 0, y: 7 }, move: false },
        { img: wR1, pos: { x: 7, y: 7 }, move: false },
      ],
    };
    turn = "w";
    color = "w";
  }

  updateMatrix(pieces);
  moveGenerator(pieces);
  update();

  if (turn == "w" && color == "w") {
    moveCount = 1;
  }
  if (turn == "b" && color == "b") {
    moveCount = 0;
    setTimeout(aiMoves, 0);
  }
}

function playAsBlack() {
  color = "w";
  changeColor();
}
/* ai vs ai menu handler */
function aiVsAi() {
  color = "b";
  changeColor();
  mode = "ai";
  moveCount = 1;
  update();
  setTimeout(aiMoves, 0);
}

function handlePause(event) {
  let x = event.offsetX;
  let y = event.clientY;
  if (x > 120 && x < 150 && y > 300 && y < 330) {
    result.style.display = "none";
    gameMenu.style.display = "block";
    contd.style.display = "block";
    canvas.style.opacity = "40%";
    startGame = false;
  }
}

function handleContinue() {
  startGame = true;
  gameMenu.style.display = "none";
  contd.style.display = "none";
  canvas.style.opacity = "100%";
}

function handleP2P() {
  startGame = true;
  gameMenu.style.display = "none";
  canvas.style.opacity = "100%";
  color = "b";
  changeColor();
  mode = "p";
}
