/* declaring dom elemnts ,images  and other elements required in  the game */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const captured = document.getElementById('captured');
const ctx2 = captured.getContext('2d');
const button = document.getElementById('color-reverse');
const ai = document.getElementById('ai');
const result = document.getElementById('result');
const playAsWhite = document.getElementById('play-as-white');
const gameMenu = document.getElementsByClassName('game-menu')[0];
const contd = document.getElementById("continue");
const p2p =  document.getElementById("p-Vs-p");
const home =  document.getElementById('home');
const think = document.getElementById('think');
const value ={p:100 , b:350 ,n:325 , q:970 , r:470};

/* chess piece images notation  = standard */
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



//piece audio
const sound1 = new Audio('assets/sound1.mp3');
const sound = new Audio('assets/sound.mp3');
const checkSound = new Audio('assets/check.mp3');
