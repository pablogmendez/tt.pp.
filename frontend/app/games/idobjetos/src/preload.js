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
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("gameover","assets/gameover.png");
        // preloading various assets
        this.game.load.spritesheet("levels", "assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "assets/home.png", 48, 48);
		this.game.stage.backgroundColor = "#ffffff";
		// Cargo los audios
		this.game.load.audio("animales", ["assets/audio/idobjetos/animales.ogg"]);
		this.game.load.audio("muybien", ["assets/audio/idobjetos/muybien.ogg"]);
		this.game.load.audio("frutas", ["assets/audio/idobjetos/frutas.ogg"]);
		this.game.load.audio("objetos", ["assets/audio/idobjetos/objetos.ogg"]);
		this.game.load.audio("profesiones", ["assets/audio/idobjetos/profesiones.ogg"]);
		this.game.load.audio("vehiculos", ["assets/audio/idobjetos/vehiculos.ogg"]);

		// Cargo las imagenes de las figuras
		this.game.load.spritesheet("animales", "assets/animales.png", 71, 77);
		this.game.load.spritesheet("animales1", "assets/animales - 1.png", 71, 77);
		this.game.load.spritesheet("animales2", "assets/animales - 2.png", 71, 77);
		this.game.load.spritesheet("animales3", "assets/animales - 3.png", 71, 77);
		this.game.load.spritesheet("animales4", "assets/animales - 4.png", 71, 77);
		this.game.load.spritesheet("frutas", "assets/frutas.png", 71, 77);
		this.game.load.spritesheet("frutas1", "assets/frutas - 1.png", 71, 77);
		this.game.load.spritesheet("frutas2", "assets/frutas - 2.png", 71, 77);
		this.game.load.spritesheet("frutas3", "assets/frutas - 3.png", 71, 77);
		this.game.load.spritesheet("frutas4", "assets/frutas - 4.png", 71, 77);
		this.game.load.spritesheet("objetos", "assets/objetos.png", 71, 77);
		this.game.load.spritesheet("objetos1", "assets/objetos - 1.png", 71, 77);
		this.game.load.spritesheet("objetos2", "assets/objetos - 2.png", 71, 77);
		this.game.load.spritesheet("objetos3", "assets/objetos - 3.png", 71, 77);
		this.game.load.spritesheet("objetos4", "assets/objetos - 4.png", 71, 77);
		this.game.load.spritesheet("profesiones", "assets/profesiones.png", 71, 77);
		this.game.load.spritesheet("profesiones1", "assets/profesiones - 1.png", 71, 77);
		this.game.load.spritesheet("profesiones2", "assets/profesiones - 2.png", 71, 77);
		this.game.load.spritesheet("profesiones3", "assets/profesiones - 3.png", 71, 77);
		this.game.load.spritesheet("profesiones4", "assets/profesiones - 4.png", 71, 77);
		this.game.load.spritesheet("vehiculos", "assets/vehiculos.png", 71, 77);
		this.game.load.spritesheet("vehiculos1", "assets/vehiculos - 1.png", 71, 77);
		this.game.load.spritesheet("vehiculos2", "assets/vehiculos - 2.png", 71, 77);
		this.game.load.spritesheet("vehiculos3", "assets/vehiculos - 3.png", 71, 77);
		this.game.load.spritesheet("vehiculos4", "assets/vehiculos - 4.png", 71, 77);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}
