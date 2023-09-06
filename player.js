class  Player{
  constructor(warna, y) {
    this.warna = color(warna)
    this.d = 40
    this.pos = createVector(50, y)
    this.speed = 5
   
  }
  
  tampilkan() {
    fill(this.warna)
    circle(this.pos.x, this.pos.y, this.d)
  }
  
  maju() {
    this.pos.x +=this.speed
     
  }
  finish(){
    if(this.pos.x > width) {
      fill(this.warna)
      textSize(30)
      textAlign(CENTER)
      text('FINISH',width/2,height/2)
      noLoop()
      sfxTepukTangan.play()
    }
  }
}