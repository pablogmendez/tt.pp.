var playLevel_idobjetos = function(game){
}

playLevel_idobjetos.prototype = {
  	create: function(){
		// showing level title
		var style = {
			font: "32px Arial",
			fill: "#ffffff"
		};
		var levelTitle = this.game.add.text(0,0,"PLAYING LEVEL "+this.game.global.level,style);
		levelTitle.align = "center";
          levelTitle.x = (this.game.width - levelTitle.width) / 2; 
          // showing game thumbnails
		for(var i=0; i<=3; i++){
			var gameThumb = this.game.add.button(this.game.width/2, 90*(i+1), "game", this.levelFinished, this);
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = i;  	
		}
	},
	levelFinished: function(button){
		// did we improved our stars in current level?
		if(this.game.global.starsArray[this.game.global.level-1]<button.frame){
			this.game.global.starsArray[this.game.global.level-1] = button.frame;
		}
		// if we completed a level and next level is locked - and exists - then unlock it
		if(button.frame>0 && this.game.global.starsArray[this.game.global.level]==4 && this.game.global.level<this.game.global.starsArray.length){
			this.game.global.starsArray[this.game.global.level] = 0;	
		}
		// back to level selection
		this.game.state.start("LevelSelect");
	}
}  