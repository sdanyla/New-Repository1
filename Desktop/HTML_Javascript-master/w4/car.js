//var randomNumber = Math.round(Math.random() * (10 - 3) + 3);
var randomNumber = randomRange(20, -10);
//Math.random() * (high-low) + low

//alert(randomNumber);

function randomRange(high, low){
   return Math.round(Math.random()*(high - low)+ low)
}

function GameObject(){
    this.x = 50;
    this.y = 200;
    this.w = 60;
    this.h = 60;
    this.color ='orange';
    this.image;

    this.draw = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }

    this.drawSprite = function(){
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
    }


}