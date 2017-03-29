function missile(x,y,width,height){
	//Coordinates
	this.x=x;	this.y=y;
	//Dimensions
	this.width=width;	this.height=height;
	
	this.speed=3;
	
	//Bounding Box
	this.missilebox=new BoundingBox(this.x,this.y,this.width,this.height);
	
	this.sprite=new Image();
	this.sprite.src='Img/latest.png';
	this.sprite.width=this.width;
	this.sprite.height=this.height;
	
	this.Update=function(){
		this.Move();
	}
	
	this.Move=function(){
		this.missilebox.Move(this.x-this.speed,this.y);
		this.x-=this.speed;
	}
	
	this.Draw=function(ctx){
		ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
	}


}