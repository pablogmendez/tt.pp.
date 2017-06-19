var preload = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
        // preloading various assets
        this.game.load.spritesheet("levels", "assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "assets/whitescreen.png", 184, 260);
		this.game.load.spritesheet("game", "assets/game.png", 200, 80);
		
		// Cargo los audios
		this.game.load.audio("formas", ["assets/audio/colorama/formas.ogg"]);
		this.game.load.audio("muybien", ["assets/audio/colorama/muybien.ogg"]);
		this.game.load.audio("figuras", ["assets/audio/colorama/figuras.ogg"]);
		this.game.load.audio("colores", ["assets/audio/colorama/colores.ogg"]);
		this.game.load.audio("pedidosformasycolores", ["assets/audio/colorama/pedidosformasycolores.ogg"]);

		// Cargo las imagenes de las figuras
		this.game.load.spritesheet("formas", "assets/formas.png", 71, 77);
		this.game.load.spritesheet("formas_blanco", "assets/formas_blanco.png", 71, 77);
		this.game.load.spritesheet("formas_fade", "assets/formas_fade.png", 71, 77);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}