var preload_mundodeemociones = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload_mundodeemociones.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","games/mundodeemociones/assets/numbers.png",100,100);
		this.game.load.image("gametitle","games/mundodeemociones/assets/gametitle.png");
		this.game.load.image("play","games/mundodeemociones/assets/play.png");
		this.game.load.image("higher","games/mundodeemociones/assets/higher.png");
		this.game.load.image("lower","games/mundodeemociones/assets/lower.png");
		this.game.load.image("gameover","games/mundodeemociones/assets/gameover.png");
        // preloading various assets
        this.game.load.spritesheet("levels", "games/mundodeemociones/assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "games/mundodeemociones/assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "games/mundodeemociones/assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "games/mundodeemociones/assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "games/mundodeemociones/assets/whitescreen.png", 184, 260);
		this.game.load.spritesheet("game", "games/mundodeemociones/assets/game.png", 200, 80);
		
		// Cargo los audios
		this.game.load.audio("formas", ["games/mundodeemociones/assets/audio/mundodeemociones/formas.ogg"]);
		this.game.load.audio("muybien", ["games/mundodeemociones/assets/audio/mundodeemociones/muybien.ogg"]);
		this.game.load.audio("figuras", ["games/mundodeemociones/assets/audio/mundodeemociones/figuras.ogg"]);
		this.game.load.audio("colores", ["games/mundodeemociones/assets/audio/mundodeemociones/colores.ogg"]);
		this.game.load.audio("pedidosformasycolores", ["games/mundodeemociones/assets/audio/mundodeemociones/pedidosformasycolores.ogg"]);

		this.game.load.audio("emociones1", ["games/mundodeemociones/assets/audio/mundodeemociones/emociones1.ogg"]);
		this.game.load.audio("emociones2", ["games/mundodeemociones/assets/audio/mundodeemociones/emociones2.ogg"]);
		this.game.load.audio("emociones3", ["games/mundodeemociones/assets/audio/mundodeemociones/emociones3.ogg"]);
		this.game.load.audio("emociones4", ["games/mundodeemociones/assets/audio/mundodeemociones/emociones4.ogg"]);
		this.game.load.audio("consigna", ["games/mundodeemociones/assets/audio/mundodeemociones/consigna.ogg"]);

		// Cargo las imagenes de las figuras
		this.game.load.spritesheet("formas", "games/mundodeemociones/assets/formas.png", 71, 77);
		this.game.load.spritesheet("formas_blanco", "games/mundodeemociones/assets/formas_blanco.png", 71, 77);
		this.game.load.spritesheet("formas_fade", "games/mundodeemociones/assets/formas_fade.png", 71, 77);

		this.game.load.spritesheet("emociones", "games/mundodeemociones/assets/emociones.jpg", 56, 100);
		this.game.load.spritesheet("smiles", "games/mundodeemociones/assets/smiles.png", 154, 142);
		this.game.load.spritesheet("ojos", "games/mundodeemociones/assets/ojos.png", 99, 48);
		this.game.load.spritesheet("bocas", "games/mundodeemociones/assets/bocas.png", 87, 32);

		this.game.load.spritesheet("emocionesfiguras", "games/mundodeemociones/assets/emociones5.png", 100, 100);
		this.game.load.spritesheet("emocionestextos", "games/mundodeemociones/assets/emociones6.png", 69, 20);

	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}