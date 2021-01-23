canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
var selected = false;
var selectSquare;

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

var pieces = {bP:[{img:b1P,pos:{x:0, y:1}}, {img:b1P,pos:{x:1, y:1}} , {img:b1P,pos:{x:2, y:1}} , {img:b1P,pos:{x:3, y:1}} ,
          {img:b1P,pos:{x:4, y:1}} , {img:b1P,pos:{x:5, y:1}} , {img:b1P,pos:{x:6, y:1}} , {img:b1P,pos:{x:7, y:1}}],
          bK : [{img:b1K, pos:{x:4 , y:0}}],
          bN : [{img:b1N , pos:{x:1, y:0}} , {img:b1N , pos:{x:6,y:0}}],
          bB : [{img:b1B, pos:{x:2 , y:0}} , {img:b1B , pos:{x:5 , y:0}}],
          bQ : [{img:b1Q,pos:{x:3,y:0}}],
          bR : [{img:b1R,pos:{x:0,y:0}} ,{img:b1R,pos:{x:7 , y:0}}],

          wP : [{img:w1P,pos:{x:0, y:6}}, {img:w1P,pos:{x:1, y:6}} , {img:w1P,pos:{x:2, y:6}} , {img:w1P,pos:{x:3, y:6}} ,
          {img:w1P,pos:{x:4, y:6}} , {img:w1P,pos:{x:5, y:6}} , {img:w1P,pos:{x:6, y:6}} , {img:w1P,pos:{x:7, y:6}}],
          wK : [{img:w1K, pos:{x:4 , y:7}}],
          wN : [{img:w1N , pos:{x:1, y:7}} , {img:w1N , pos:{x:6,y:7}}],
          wB : [{img:w1B, pos:{x:2 , y:7}} , {img:w1B , pos:{x:5 , y:7}}],
          wQ : [{img:w1Q,pos:{x:3,y:7}}],
          wR : [{img:w1R,pos:{x:0,y:7}} ,{img:w1R,pos:{x:7 , y:7}}] }


for (var i = 0 ; i<=8; i++)
{

    for (var j = 0 ; j<=8 ; j++)
    {
      if((j%2 == 0 && i%2 == 0) ||  (j%2==1 && i%2 == 1)){
        ctx.fillStyle = "#f5dcda";
        ctx.fillRect(i*80,j*80,80,80);

      }
      if((j%2 ==1 && i%2 == 0) || (j%2 == 0 && i%2 == 1) ){
        ctx.fillStyle = "#b58863";
        ctx.fillRect(i*80 , j*80 , 80 , 80)
      }
    }

}
drawPos();

function drawPos(){
for(const key in pieces ){
  pieces[key].forEach((item, i) => {
    ctx.drawImage(item.img, item.pos.x * 80 + 20 , item.pos.y * 80 + 20)  });

}}

canvas.addEventListener('click',handleClick);



function handleClick(event){
  var x = event.clientX;
  var y = event.clientY;
  let xR = Math.floor(x / 80);
  let yR = Math.floor(y / 80);
  select(xR , yR);

}
function select(x,y){
  ctx.strokeStyle="red";
  ctx.strokeRect(x*80 , y*80 , 80 , 80);
  selectSquare = {x:x , y:y};

}
