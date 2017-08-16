var preload_asociaformas = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload_asociaformas.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","games/asociaformas/assets/gametitle.png");
		this.game.load.image("play","games/asociaformas/assets/play.png");

        // preloading various assets
        this.game.load.spritesheet("levels", "games/asociaformas/assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "games/asociaformas/assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "games/asociaformas/assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "games/asociaformas/assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "games/asociaformas/assets/whitescreen.png", 184, 260);
		this.game.load.spritesheet("profesiones_frames", "games/asociaformas/assets/profesiones_frames.png", 217, 85);
		this.game.load.spritesheet("profesiones_norm", "games/asociaformas/assets/profesiones_norm.png", 70, 70);
		this.game.load.spritesheet("profesiones_fade", "games/asociaformas/assets/profesiones_fade.png", 70, 70);
		this.game.load.spritesheet("profesiones_withe", "games/asociaformas/assets/profesiones_withe.png", 70, 70);
		this.game.load.spritesheet("profesiones_black", "games/asociaformas/assets/profesiones_black.png", 70, 70);

		this.game.load.spritesheet("comidas_frames", "games/asociaformas/assets/comidas_frames.png", 217, 85);
		this.game.load.spritesheet("comidas_norm", "games/asociaformas/assets/comidas_norm.png", 70, 70);
		this.game.load.spritesheet("comidas_fade", "games/asociaformas/assets/comidas_fade.png", 70, 70);
		this.game.load.spritesheet("comidas_withe", "games/asociaformas/assets/comidas_withe.png", 70, 70);
		this.game.load.spritesheet("comidas_black", "games/asociaformas/assets/comidas_black.png", 70, 70);

		this.game.load.spritesheet("animales_frames", "games/asociaformas/assets/animales_frames.png", 217, 85);
		this.game.load.spritesheet("animales_norm", "games/asociaformas/assets/animales_norm.png", 70, 70);
		this.game.load.spritesheet("animales_fade", "games/asociaformas/assets/animales_fade.png", 70, 70);
		this.game.load.spritesheet("animales_withe", "games/asociaformas/assets/animales_withe.png", 70, 70);
		this.game.load.spritesheet("animales_black", "games/asociaformas/assets/animales_black.png", 70, 70);

		this.game.load.spritesheet("objetos_frames", "games/asociaformas/assets/objetos_frames.png", 217, 85);
		this.game.load.spritesheet("objetos_norm", "games/asociaformas/assets/objetos_norm.png", 70, 70);
		this.game.load.spritesheet("objetos_fade", "games/asociaformas/assets/objetos_fade.png", 70, 70);
		this.game.load.spritesheet("objetos_withe", "games/asociaformas/assets/objetos_withe.png", 70, 70);
		this.game.load.spritesheet("objetos_black", "games/asociaformas/assets/objetos_black.png", 70, 70);

		this.game.load.spritesheet("objetos2_frames", "games/asociaformas/assets/objetos2_frames.png", 217, 85);
		this.game.load.spritesheet("objetos2_norm", "games/asociaformas/assets/objetos2_norm.png", 70, 70);
		this.game.load.spritesheet("objetos2_fade", "games/asociaformas/assets/objetos2_fade.png", 70, 70);
		this.game.load.spritesheet("objetos2_withe", "games/asociaformas/assets/objetos2_withe.png", 70, 70);
		this.game.load.spritesheet("objetos2_black", "games/asociaformas/assets/objetos2_black.png", 70, 70);

		this.game.stage.backgroundColor = "#ffffff";
		// Cargo los audios
		this.game.load.audio("consignas", ["games/asociaformas/assets/audio/asociaformas/consignas.ogg"]);
		this.game.load.audio("respestas_profesiones", ["games/asociaformas/assets/audio/asociaformas/respuestas_profesiones.ogg"]);
		this.game.load.audio("respestas_comidas", ["games/asociaformas/assets/audio/asociaformas/respuestas_comidas.ogg"]);
		this.game.load.audio("respestas_animales", ["games/asociaformas/assets/audio/asociaformas/respuestas_animales.ogg"]);
		this.game.load.audio("respestas_objetos", ["games/asociaformas/assets/audio/asociaformas/respuestas_objetos_1.ogg"]);
		this.game.load.audio("respestas_objetos2", ["games/asociaformas/assets/audio/asociaformas/respuestas_objetos_2.ogg"]);
		this.game.load.audio("muybien", ["games/asociaformas/assets/audio/asociaformas/muybien.ogg"]);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}