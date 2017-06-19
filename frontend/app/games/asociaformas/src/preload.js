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

        // preloading various assets
        this.game.load.spritesheet("levels", "assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "assets/whitescreen.png", 184, 260);
		this.game.load.spritesheet("profesiones_frames", "assets/profesiones_frames.png", 217, 85);
		this.game.load.spritesheet("profesiones_norm", "assets/profesiones_norm.png", 70, 70);
		this.game.load.spritesheet("profesiones_fade", "assets/profesiones_fade.png", 70, 70);
		this.game.load.spritesheet("profesiones_withe", "assets/profesiones_withe.png", 70, 70);
		this.game.load.spritesheet("profesiones_black", "assets/profesiones_black.png", 70, 70);

		this.game.load.spritesheet("comidas_frames", "assets/comidas_frames.png", 217, 85);
		this.game.load.spritesheet("comidas_norm", "assets/comidas_norm.png", 70, 70);
		this.game.load.spritesheet("comidas_fade", "assets/comidas_fade.png", 70, 70);
		this.game.load.spritesheet("comidas_withe", "assets/comidas_withe.png", 70, 70);
		this.game.load.spritesheet("comidas_black", "assets/comidas_black.png", 70, 70);

		this.game.load.spritesheet("animales_frames", "assets/animales_frames.png", 217, 85);
		this.game.load.spritesheet("animales_norm", "assets/animales_norm.png", 70, 70);
		this.game.load.spritesheet("animales_fade", "assets/animales_fade.png", 70, 70);
		this.game.load.spritesheet("animales_withe", "assets/animales_withe.png", 70, 70);
		this.game.load.spritesheet("animales_black", "assets/animales_black.png", 70, 70);

		this.game.load.spritesheet("objetos_frames", "assets/objetos_frames.png", 217, 85);
		this.game.load.spritesheet("objetos_norm", "assets/objetos_norm.png", 70, 70);
		this.game.load.spritesheet("objetos_fade", "assets/objetos_fade.png", 70, 70);
		this.game.load.spritesheet("objetos_withe", "assets/objetos_withe.png", 70, 70);
		this.game.load.spritesheet("objetos_black", "assets/objetos_black.png", 70, 70);

		this.game.load.spritesheet("objetos2_frames", "assets/objetos2_frames.png", 217, 85);
		this.game.load.spritesheet("objetos2_norm", "assets/objetos2_norm.png", 70, 70);
		this.game.load.spritesheet("objetos2_fade", "assets/objetos2_fade.png", 70, 70);
		this.game.load.spritesheet("objetos2_withe", "assets/objetos2_withe.png", 70, 70);
		this.game.load.spritesheet("objetos2_black", "assets/objetos2_black.png", 70, 70);

		this.game.stage.backgroundColor = "#ffffff";
		// Cargo los audios
		this.game.load.audio("consignas", ["assets/audio/asociaformas/consignas.ogg"]);
		this.game.load.audio("respestas_profesiones", ["assets/audio/asociaformas/respuestas_profesiones.ogg"]);
		this.game.load.audio("respestas_comidas", ["assets/audio/asociaformas/respuestas_comidas.ogg"]);
		this.game.load.audio("respestas_animales", ["assets/audio/asociaformas/respuestas_animales.ogg"]);
		this.game.load.audio("respestas_objetos", ["assets/audio/asociaformas/respuestas_objetos_1.ogg"]);
		this.game.load.audio("respestas_objetos2", ["assets/audio/asociaformas/respuestas_objetos_2.ogg"]);
		this.game.load.audio("muybien", ["assets/audio/asociaformas/muybien.ogg"]);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}