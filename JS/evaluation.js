
function initializeEvaluationMatrix(){

bPMatrix=[[-100,0,0,0,5,0,90,150],
          [-100,0,0,0,5,0,90,150],
          [-100,0,5,5,10,20,90,150],
          [-100,0,10,20,20,15,90,150],
          [-100,0,10,20,20,15,90,150],
          [-100,0,5,5,10,20,90,150],
          [-100,0,0,0,5,0,90,150],
          [-100,0,0,0,5,0,90,150]];



wPMatrix =[[150,90,0,5,0,0,0,-100],
            [150,90,0,5,0,0,0,-100],
            [150,90,20,10,5,5,0,-100],
            [150,90,15,20,20,10,0,-100],
            [150,90,15,20,20,10,0,-100],
            [150,90,20,10,5,5,0,-100],
            [150,90,0,5,0,0,0,-100],
            [150,90,0,5,0,0,0,-100]]

bBMatrix =[[0,0,0,0,0,0,0,0],
          [0,20,0,0,0,0,20,0],
          [0,0,20,0,0,20,0,0],
          [0,0,20,20,20,20,0,0],
          [0,0,20,20,20,20,0,0],
          [0,0,20,0,0,20,0,0],
          [0,20,0,0,0,0,20,0],
          [0,0,0,0,0,0,0,0]]
wBMatrix = bBMatrix;

bRMatrix =[[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [30,30,30,30,30,30,30,30],
            [30,30,30,30,30,30,30,30],
            [30,30,30,30,30,30,30,30],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]]
wRMatrix = bRMatrix;

bNMatrix =[[-50,-50,-50,-20,-10,-50,-50,-50],
            [-10,0,10,10,10,10,0,-10],
            [-10,5,10,10,20,20,5,-20],
            [-10,10,20,20,20,20,10,-20],
            [-10,20,20,20,20,20,20,-10],
            [-10,5,10,10,20,20,5,-20],
            [-10,0,10,10,10,10,0,-10],
            [-50,-50,-50,-20,-10,-50,-50,-50]]


wNMatrix =[[-50,-50,-50,-20,-10,-50,-50,-50],
           [-10,0,10,10,10,10,0,-10],
           [-20,5,20,20,10,10,5,-10],
           [-20,10,20,20,20,20,10,-10],
           [-10,20,20,20,20,20,20,-10],
           [-20,5,20,20,10,10,5,-10],
           [-10,0,10,10,10,10,0,-10],

           [-50,-50,-50,-20,-10,-50,-50,-50]]


bQMatrix = [[5,5,0,0,0,0,5,5],
            [0,0,5,10,10,5,5,10],
            [5,5,10,10,10,12,15,5],
            [5,5,10,10,10,12,15,5],
            [5,5,10,10,10,12,15,5],
            [5,5,10,10,10,12,15,5],
            [0,0,5,10,10,5,5,10],
            [5,5,0,0,0,0,5,5],
            ]

wQMatrix =[[5,5,0,0,0,0,5,5],
           [10,5,5,10,10,5,0,0],
           [5,15,12,10,10,10,5,5],
          [5,15,12,10,10,10,5,5],
          [5,15,12,10,10,10,5,5],
          [5,15,12,10,10,10,5,5],
          [10,5,5,10,10,5,0,0],
          [5,5,0,0,0,0,5,5]]


bKMatrix = [[60,60,60,-50,-50,-50,60,60]
            [0,0,0,0,0,0,0,0],
          [-5,-5,-5,-5,-5,-5,-5,-5],
          [-10,-10,-10,-10,-10,-10,-10,-10],
          [-30,-30,-30,-30,-30,-30,-30,-30],
          [0,0,0,0,0,0,0,0]
          [0,0,0,0,0,0,0,0]
          [0,0,0,0,0,0,0,0]]

for(let i = 7 ; i>=0; i-- ){
  wKMatrix.push(bKMatrix[i])
}

}
