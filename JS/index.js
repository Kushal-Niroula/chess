canvas = document.getElementById('canvas');

ctx = canvas.getContext('2d');
button = document.getElementById('color-reverse');
ai = document.getElementById('ai');

canvas.height = 640;
canvas.width = 640;
var moveCount = 1;
var player = -1;
var selected = false;
var selectSquare = [];
var flag;
var mode = 0;
var isCapture;
var selectedPiece;
var turn = 'w';
var color = 'w';
var castle = false;
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
const bP1 = document.getElementById('blackPawn');
const bK1 = document.getElementById('blackKing');
const bN1 = document.getElementById('blackKnight');
const bB1 = document.getElementById('blackBishop');
const bQ1 = document.getElementById('blackQueen');
const bR1 = document.getElementById('blackRook');
const wP1 = document.getElementById('whitePawn');
const wK1 = document.getElementById('whiteKing');
const wN1 = document.getElementById('whiteKnight');
const wB1 = document.getElementById('whiteBishop');
const wQ1 = document.getElementById('whiteQueen');
const wR1 = document.getElementById('whiteRook');


document.addEventListener('DOMContentLoaded' , function(){
  setTimeout(update,2000);
  setTimeout(moveGenerator,2000);
},false);

var value ={p:100 , b:350 ,n:325 , q:970 , r:470};


var pieces = {bP:[{img:bP1,pos:{x:0, y:1}}, {img:bP1,pos:{x:1, y:1}} , {img:bP1,pos:{x:2, y:1}} , {img:bP1,pos:{x:3, y:1}} ,
          {img:bP1,pos:{x:4, y:1}} , {img:bP1,pos:{x:5, y:1}} , {img:bP1,pos:{x:6, y:1}} , {img:bP1,pos:{x:7, y:1}}],
          bK : [{img:bK1, pos:{x:4 , y:0} , move:false}],
          bN : [{img:bN1 , pos:{x:1, y:0}} , {img:bN1 , pos:{x:6,y:0}}],
          bB : [{img:bB1, pos:{x:2 , y:0}} , {img:bB1 , pos:{x:5 , y:0}}],
          bQ : [{img:bQ1,pos:{x:3,y:0}}],
          bR : [{img:bR1,pos:{x:0,y:0}, move:false} ,{img:bR1,pos:{x:7 , y:0},move:false}],

          wP : [{img:wP1,pos:{x:0, y:6}}, {img:wP1,pos:{x:1, y:6}} , {img:wP1,pos:{x:2, y:6}} , {img:wP1,pos:{x:3, y:6}} ,
          {img:wP1,pos:{x:4, y:6}} , {img:wP1,pos:{x:5, y:6}} , {img:wP1,pos:{x:6, y:6}} , {img:wP1,pos:{x:7, y:6}}],
          wK : [{img:wK1, pos:{x:4 , y:7} , move:0}],
          wN : [{img:wN1 , pos:{x:1, y:7}} , {img:wN1 , pos:{x:6,y:7}}],
          wB : [{img:wB1, pos:{x:2 , y:7}} , {img:wB1 , pos:{x:5 , y:7}}],
          wQ : [{img:wQ1,pos:{x:3,y:7}}],
          wR : [{img:wR1,pos:{x:0,y:7},move:false} ,{img:wR1,pos:{x:7 , y:7},move:false}] }

var matrix = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
initializeEvaluationMatrix();

updateMatrix();

canvas.addEventListener('click',handleClick);



function handleClick(event){
  var x = event.clientX;
  var y = event.clientY;
  let xR = Math.floor(x / 80);
  let yR = Math.floor(y / 80);
  select(xR , yR);

}
button.addEventListener('click',changeColor);
ai.addEventListener('click', aiVsAi);
