/* declaring variables which determines the state and truth of the game */

var matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
var arrow = [];
var moveCount = 1;
var player = -1;
var selected = false;
var selectSquare = [];
var flag;
var mode = 0;
var selectedPiece;
var turn = "w";
var color = "w";
var castle = false;
var startGame = false;
var isCheck = 0;
var whiteMoves = [];
var blackMoves = [];
var dots = [];
var recursion = 0;
var bPMatrix = [];
var wPMatrix = [];
var bBMatrix = [];
var wBMatrix = [];
var bRMatrix = [];
var wRMatrix = [];
var bNMatrix = [];
var wNMatrix = [];
var bQMatrix = [];
var wQMatrix = [];
var bKMatrix = [];
var wKMatrix = [];
