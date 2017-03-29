function Buttonpause(){
	this.x=800;
	this.y=1;
	this.width=200;
	this.height=100;
	this.sprite=new Image();
	this.sprite.src='Img/pause.png';   //CHANGE IMAGE PATH (PAUSE IMAGE)
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}
	this.onClick=function(){
		if (game.pause==false) {game.pause=true;
					this.sprite.src='Img/resume.png'}	//CHANGE IMAGE PATH (RESUME IMAGE)
		else {game.pause=false;
			  this.sprite.src='Img/pause.png' 	//CHANGE IMAGE PATH (PAUSE IMAGE)					
			  }
	}

}
