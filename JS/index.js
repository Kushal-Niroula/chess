/* declaring height and width of both canvas */
canvas.height = 640;
canvas.width = 640;
captured.height = 640;
captured.width = 300;



document.addEventListener('DOMContentLoaded' , function(){
  setTimeout(update,2000);
  setTimeout(moveGenerator,2000);
},false);



/* declaring initial board setup , standard chess notation */
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
  var x = event.offsetX;
  var y = event.clientY;
  let xR = Math.floor(x/ 80 );
  let yR = Math.floor(y/ 80);
  if(startGame){
  select(xR , yR);
}
}

button.addEventListener('click',playAsBlack);
ai.addEventListener('click', aiVsAi);
captured.addEventListener('click',handlePause);
contd.addEventListener('click',handleContinue);

playAsWhite.addEventListener('click',function(){
  canvas.style.opacity = "100%";
  gameMenu.style.display = "none";
  startGame = true;
  color = 'b';
  changeColor();
})
