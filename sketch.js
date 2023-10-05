let player1, player2;
let x1finish, y1finish, x2finish, y2finish;
let x1start, y1start, x2start, y2start;
let sfxLoncat
let bg
let sfxTepukTangan

function preload(){
  soundFormats('mp3')
  sfxLoncat = loadSound('jump.mp3')
  sfxTepukTangan = loadSound('akhir.wav')
  bg = loadImage('aspal.jpg')
  player1 = loadImage('balap.png')
  player2= loadImage('karung.png')
}

function setup() {
  createCanvas(600, 400);
  
  player1 = new Player(-10, 230, player1) 
  player2 = new Player(-20, 150, player2)
}

function draw() {
  image(bg, 0, 0, width, height);
  
  player1.tampilkan()  
  player2.tampilkan()
  
  player1.maju()  
  player2.maju()
  
}

function draw() {
  image(bg, 0, 0, width, height);
   
  player1.tampilkan()
  player2.tampilkan()
  
  player1.finish()
  player2.finish()

}
function  keyPressed(){
  if(keyCode === LEFT_ARROW){
    player1.maju()
    sfxLoncat.play()
  }
  
  else if (keyCode === RIGHT_ARROW){
     player2.maju()
     sfxLoncat.play()
  }
}


