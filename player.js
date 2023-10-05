class  Player{
  constructor(x, y, player) {
    this.player = player
    this.x = x
    this.y = y
    this.speed = 5
   
  }
  
  tampilkan() {
   image(this.player, this.x, this.y, 50, 100)
  }
  
  maju() {
    this.x += this.speed
     
  }
  finish(){
    if(this.x > 520) {
      sfxTepukTangan.play()
      textSize(30)
      textAlign(CENTER)
      text('FINISH',width/2,height/2)
      noLoop()
      sfxTepukTangan.play()
    }
  }
}