/**
*	MAIN OF THE Game
*
*/

//get Canvas
var canvas=document.getElementById('gamecanvas');
ctx=canvas.getContext("2d");
game=new Game();
canvas.style.backgroundColor='white';
	
// Avvio Musica
function avvia(){
	var play = document.getElementById("audio").play(); 
}	
// Stop Musica
function ferma(){	
 var mute = document.getElementById("audio").pause();
}


//Dichiarazione oggetto game
function Game(){
	//Declare all game objects
	this.background=new Background();
	this.hud=new Buttonpause();
	var i=0;
	//Creazione del metodo update dell'oggetto game
	this.Update=function() {
		//update the game logic
		
	}
//Creazione del metodo draw dell'oggetto game
this.Draw=function(){
	//Draw all the game objects
	this.background.Draw(ctx);
	this.hud.Draw(ctx);
	
}





this.updateAnimation=function(sprite){
	
	this.player.animation(sprite);

}

//Creazione del game loop
this.loop=function(){
//			this.getCollision();
			this.Update();
			this.Draw(ctx);
			Inputs.Clear();
			requestAnimFrame(function(){
				game.loop();
			});
		}		
//Metodo per far iniziare il game loop
this.start=function() {
	this.loop();
}
}
function begin(){
	game.start();
} 
window.requestAnimFrame = (function(cb){
	return window.requestAnimationFrame ||
		   window.webkitRequestAnimationFrame ||
		   window.mozRequestAnimationFrame ||
		   window.oRequestAnimationFrame ||
		   window.msRequestAnimationFrame ||
		    
		   function(cb){
				setTimeout(cb,1000/60);
		   }
	
})();













   	
         		
		

