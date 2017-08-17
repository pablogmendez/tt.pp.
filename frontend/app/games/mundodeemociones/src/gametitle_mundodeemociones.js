var gameTitle_mundodeemociones = function(game){
console.log("%cStarting my awesome game - game title", "color:white; background:red");
}

gameTitle_mundodeemociones.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("LevelSelect");
	}
}
