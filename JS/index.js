canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
var player = -1;
var selected = false;
var selectSquare = [];
var flag;
var isCapture;
var selectedPiece;
var turn = 'w';
var castle = false;
var check = false;
const b1P = document.getElementById('blackPawn');
const b1K = document.getElementById('blackKing');
const b1N = document.getElementById('blackKnight');
const b1B = document.getElementById('blackBishop');
const b1Q = document.getElementById('blackQueen');
const b1R = document.getElementById('blackRook');
const w1P = document.getElementById('whitePawn');
const w1K = document.getElementById('whiteKing');
const w1N = document.getElementById('whiteKnight');
const w1B = document.getElementById('whiteBishop');
const w1Q = document.getElementById('whiteQueen');
const w1R = document.getElementById('whiteRook');


document.addEventListener('DOMContentLoaded' , function(){
  setTimeout(update,2000);
},false);




var pieces = {bP:[{img:b1P,pos:{x:0, y:1}}, {img:b1P,pos:{x:1, y:1}} , {img:b1P,pos:{x:2, y:1}} , {img:b1P,pos:{x:3, y:1}} ,
          {img:b1P,pos:{x:4, y:1}} , {img:b1P,pos:{x:5, y:1}} , {img:b1P,pos:{x:6, y:1}} , {img:b1P,pos:{x:7, y:1}}],
          bK : [{img:b1K, pos:{x:4 , y:0} , move:false}],
          bN : [{img:b1N , pos:{x:1, y:0}} , {img:b1N , pos:{x:6,y:0}}],
          bB : [{img:b1B, pos:{x:2 , y:0}} , {img:b1B , pos:{x:5 , y:0}}],
          bQ : [{img:b1Q,pos:{x:3,y:0}}],
          bR : [{img:b1R,pos:{x:0,y:0}, move:false} ,{img:b1R,pos:{x:7 , y:0},move:false}],

          wP : [{img:w1P,pos:{x:0, y:6}}, {img:w1P,pos:{x:1, y:6}} , {img:w1P,pos:{x:2, y:6}} , {img:w1P,pos:{x:3, y:6}} ,
          {img:w1P,pos:{x:4, y:6}} , {img:w1P,pos:{x:5, y:6}} , {img:w1P,pos:{x:6, y:6}} , {img:w1P,pos:{x:7, y:6}}],
          wK : [{img:w1K, pos:{x:4 , y:7} , move:0}],
          wN : [{img:w1N , pos:{x:1, y:7}} , {img:w1N , pos:{x:6,y:7}}],
          wB : [{img:w1B, pos:{x:2 , y:7}} , {img:w1B , pos:{x:5 , y:7}}],
          wQ : [{img:w1Q,pos:{x:3,y:7}}],
          wR : [{img:w1R,pos:{x:0,y:7},move:false} ,{img:w1R,pos:{x:7 , y:7},move:false}] }

var matrix = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

updateMatrix();

canvas.addEventListener('click',handleClick);



function handleClick(event){
  var x = event.clientX;
  var y = event.clientY;
  let xR = Math.floor(x / 80);
  let yR = Math.floor(y / 80);
  select(xR , yR);

}
