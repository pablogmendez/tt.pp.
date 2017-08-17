var preload_idobjetos = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload_idobjetos.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","games/idobjetos/assets/gametitle.png");
		this.game.load.image("play","games/idobjetos/assets/play.png");
		this.game.load.image("gameover","games/idobjetos/assets/gameover.png");
        // preloading various assets
        this.game.load.spritesheet("levels", "games/idobjetos/assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "games/idobjetos/assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "games/idobjetos/assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "games/idobjetos/assets/home.png", 48, 48);
		this.game.stage.backgroundColor = "#ffffff";
		// Cargo los audios
		this.game.load.audio("animales", ["games/idobjetos/assets/audio/idobjetos/animales.ogg"]);
		this.game.load.audio("muybien", ["games/idobjetos/assets/audio/idobjetos/muybien.ogg"]);
		this.game.load.audio("frutas", ["games/idobjetos/assets/audio/idobjetos/frutas.ogg"]);
		this.game.load.audio("objetos", ["games/idobjetos/assets/audio/idobjetos/objetos.ogg"]);
		this.game.load.audio("profesiones", ["games/idobjetos/assets/audio/idobjetos/profesiones.ogg"]);
		this.game.load.audio("vehiculos", ["games/idobjetos/assets/audio/idobjetos/vehiculos.ogg"]);

		// Cargo las imagenes de las figuras
		this.game.load.spritesheet("animales", "games/idobjetos/assets/animales.png", 71, 77);
		this.game.load.spritesheet("animales1", "games/idobjetos/assets/animales - 1.png", 71, 77);
		this.game.load.spritesheet("animales2", "games/idobjetos/assets/animales - 2.png", 71, 77);
		this.game.load.spritesheet("animales3", "games/idobjetos/assets/animales - 3.png", 71, 77);
		this.game.load.spritesheet("animales4", "games/idobjetos/assets/animales - 4.png", 71, 77);
		this.game.load.spritesheet("frutas", "games/idobjetos/assets/frutas.png", 71, 77);
		this.game.load.spritesheet("frutas1", "games/idobjetos/assets/frutas - 1.png", 71, 77);
		this.game.load.spritesheet("frutas2", "games/idobjetos/assets/frutas - 2.png", 71, 77);
		this.game.load.spritesheet("frutas3", "games/idobjetos/assets/frutas - 3.png", 71, 77);
		this.game.load.spritesheet("frutas4", "games/idobjetos/assets/frutas - 4.png", 71, 77);
		this.game.load.spritesheet("objetos", "games/idobjetos/assets/objetos.png", 71, 77);
		this.game.load.spritesheet("objetos1", "games/idobjetos/assets/objetos - 1.png", 71, 77);
		this.game.load.spritesheet("objetos2", "games/idobjetos/assets/objetos - 2.png", 71, 77);
		this.game.load.spritesheet("objetos3", "games/idobjetos/assets/objetos - 3.png", 71, 77);
		this.game.load.spritesheet("objetos4", "games/idobjetos/assets/objetos - 4.png", 71, 77);
		this.game.load.spritesheet("profesiones", "games/idobjetos/assets/profesiones.png", 71, 77);
		this.game.load.spritesheet("profesiones1", "games/idobjetos/assets/profesiones - 1.png", 71, 77);
		this.game.load.spritesheet("profesiones2", "games/idobjetos/assets/profesiones - 2.png", 71, 77);
		this.game.load.spritesheet("profesiones3", "games/idobjetos/assets/profesiones - 3.png", 71, 77);
		this.game.load.spritesheet("profesiones4", "games/idobjetos/assets/profesiones - 4.png", 71, 77);
		this.game.load.spritesheet("vehiculos", "games/idobjetos/assets/vehiculos.png", 71, 77);
		this.game.load.spritesheet("vehiculos1", "games/idobjetos/assets/vehiculos - 1.png", 71, 77);
		this.game.load.spritesheet("vehiculos2", "games/idobjetos/assets/vehiculos - 2.png", 71, 77);
		this.game.load.spritesheet("vehiculos3", "games/idobjetos/assets/vehiculos - 3.png", 71, 77);
		this.game.load.spritesheet("vehiculos4", "games/idobjetos/assets/vehiculos - 4.png", 71, 77);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}
