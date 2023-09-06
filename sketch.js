let player1, player2;
let x1finish, y1finish, x2finish, y2finish;
let x1start, y1start, x2start, y2start;
let sfxLoncat

function preload(){
  soundFormats('mp3')
  sfxLoncat = loadSound('jump.mp3')
  sfxTepukTangan = loadSound('akhir.wav')
}

function setup() {
  createCanvas(600, 400);
  
  player1 = new Player('aqua', 300) 
  player2 = new Player('#00FA9A', 100)
}

function draw() {
  background(220, 200, 100);
  
  player1.tampilkan()  
  player2.tampilkan()
  
  player1.maju()  
  player2.maju()
  
}

function draw() {
  background(220, 200, 100);
   
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


