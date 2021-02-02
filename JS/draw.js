/* draws position based on all the pieces on the board */
function drawPos(){
    for(const key in pieces ){
      pieces[key].forEach((item, i) => {
        ctx.drawImage(item.img, item.pos.x * 80 + 20 , item.pos.y * 80 + 20)  });

}}

/* draws square selected by the player */
function drawSelect(){
  if(selectSquare.length>0){
  ctx.strokeStyle = "green";
  ctx.strokeRect(selectSquare[0].x * 80 ,selectSquare[0].y * 80 , 80 , 80);
}}


/* signals check if check is detected */
function drawCheck(){
  ctx.strokeStyle = "red";
  if(isCheck == 'w'){
    ctx.strokeRect(pieces['wK'][0].pos.x * 80 , pieces['wK'][0].pos.y * 80 ,80 ,80);
  }
  if(isCheck == 'b'){
    ctx.strokeRect(pieces['bK'][0].pos.x * 80 , pieces['bK'][0].pos.y * 80 ,80 ,80);
  }
}

/*draw navigation dots when a piece is selected */
function drawDots(){
  ctx.fillStyle = "green";
  if(dots.length>=1){
  for(let i = 0; i<dots.length ; i++ ){
    ctx.beginPath();
    ctx.arc(dots[i].x * 80+43 ,dots[i].y * 80+40 ,5 , 0 , 2*Math.PI);
    ctx.fill();

  }
}
dots = [];
}

/* draw captured pieces at the side of the board */
function drawCaptured(){
  ctx2.clearRect(0,0,captured.width , captured.height)
  updateMatrix(pieces);
  let bCounter = 0;
  let wCounter = 0;
  let bPawns = 8;
  let wPawns = 8;
  let bRooks = 2;
  let wRooks = 2;
  let wBishop = 2;
  let bBishop = 2;
  let wQueen = 1 ;
  let bQueen = 1;
  let bKnight = 2;
  let wKnight = 2;
  for (let i = 0 ; i <= 7 ; i++)
  {
    for(let j = 0 ; j<=7 ; j++){
      if(matrix[i][j] != 0){

        switch(matrix[i][j]){
          case 'wP':
            wPawns--;
            break;

          case 'bP':
            bPawns--;
            break;


          case 'bR':
            bRooks--;
            break;

          case 'wR':
            wRooks--;
            break;

          case 'bR':
            bRooks-- ;
            break;

          case 'bB':

            bBishop-- ;
            break;

          case 'wB':

            wBishop-- ;
            break;

          case 'wQ':

            wQueen-- ;
            break;

          case 'bQ':

            bQueen-- ;
            break;

          case 'wN':

            wKnight-- ;
            break;

          case 'bN':

            bKnight-- ;
            break;

          default:
            break;

        }





      }
    }
  }


  for(let i = 0 ;i <wPawns ; i++){

    if(color == 'w'){
      ctx2.drawImage(wP1,i*30,0);
    }
    else{
      ctx2.drawImage(bP1,i*30,0);
    }
    wCounter ++;
  }
  for(let i = wCounter ;i < wCounter + wRooks ; i++){

    if(color == 'w'){
      ctx2.drawImage(wR1,i*30,0);
    }
    else{
      ctx2.drawImage(bR1,i*30,0);
    }
  }
  wCounter += wRooks;

  for(let i = wCounter ;i < wCounter + wBishop ; i++){

    if(color == 'w'){
      ctx2.drawImage(wB1,i*30,0);
    }
    else{
      ctx2.drawImage(bB1,i*30,0);
    }
  }
  wCounter += wBishop;

  for(let i = wCounter ; i<wCounter + wKnight ; i++){
    if(color == 'w'){
      ctx2.drawImage(wN1,i*30,0);
    }
    else{
      ctx2.drawImage(bN1,i*30,0);
    }
    }
    wCounter += wKnight;

    for(let i = wCounter ; i<wCounter + wQueen ; i++){
      if(color == 'w'){
        ctx2.drawImage(wQ1,i*30,0);
      }
      else{
        ctx2.drawImage(bQ1,i*30,0);
      }
    }

    for(let i = 0 ;i <bPawns ; i++){

      if(color == 'w'){
        ctx2.drawImage(bP1,i*30,590);
      }
      else{
        ctx2.drawImage(wP1,i*30,590);
      }
      bCounter ++ ;
    }


    for(let i = bCounter ;i < bCounter + bRooks ; i++){

      if(color == 'w'){
        ctx2.drawImage(bR1,i*30,590);
      }
      else{
        ctx2.drawImage(wR1,i*30,590);
      }
    }
    bCounter += bRooks

    for(let i = bCounter ;i < bCounter + bBishop ; i++){

      if(color == 'w'){
        ctx2.drawImage(bB1,i*30,590);
      }
      else{
        ctx2.drawImage(wB1,i*30,590);
      }
    }
    bCounter += bBishop;

    for(let i = bCounter ;i < bCounter + bKnight ; i++){

      if(color == 'w'){
        ctx2.drawImage(bN1,i*30,590);
      }
      else{
        ctx2.drawImage(wN1,i*30,590);
      }
    }
    bCounter += bKnight;

  for(let i = bCounter; i<bCounter + bQueen ; i++){
    if(color == 'w'){
      ctx2.drawImage(bQ1,i*30,590);
    }
    else{
      ctx2.drawImage(wQ1,i*30,590);
    }
  }


}



/* draws last move */
function drawArrow(){
  ctx.beginPath();
  ctx.moveTo(arrow[0] * 80 + 40 ,arrow[1] * 80 + 40);
  ctx.lineTo(arrow[2] * 80 + 40 ,arrow[3] * 80 + 40);
  ctx.stroke();
}
