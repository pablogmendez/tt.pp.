var gameTitle_colorama = function(game){
console.log("%cStarting my awesome game - game title", "color:white; background:red");
}

gameTitle_colorama.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(160,160,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		var date = new Date();
		var year    = date.getFullYear();
		var month   = date.getMonth() + 1;
		var day     = date.getDate();
		var hour    = date.getHours();
		var minute  = date.getMinutes();
		var seconds = date.getSeconds();
		this.game.global.stats.score = 0;
		this.game.global.stats.winLevels = 0;
		this.game.global.stats.loseLevels = -1;
		this.game.global.stats.abandonLevels = 0;
		this.game.global.stats.time = 0;
		this.game.global.stats.stars = 0;
		this.game.global.stats.timestamp = year + "-" + month + "-" + day + "." + hour + ":" + minute + ":" + seconds;
		this.game.global.stats.status = "started";
		this.game.state.start("LevelSelect");
	}
}
