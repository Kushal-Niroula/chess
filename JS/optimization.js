function objectClone(pieces){
  let clone ={};
  for (const key in pieces){
    clone[key]=[];
    for(let i =0 ; i<pieces[key].length ; i++){
      clone[key].push({pos:{x:pieces[key][i].pos.x , y:pieces[key][i].pos.y}})
    }
  }
  return clone;

}
