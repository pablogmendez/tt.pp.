var preload_completafrases = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload_completafrases.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("gametitle","games/completafrases/assets/gametitle.png");
		this.game.load.image("play","games/completafrases/assets/play.png");

        // preloading various assets
        this.game.load.spritesheet("levels", "games/completafrases/assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "games/completafrases/assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "games/completafrases/assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "games/completafrases/assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "games/completafrases/assets/whitescreen.png", 184, 260);

		this.game.load.spritesheet("frase1", "games/completafrases/assets/fase1/frase1.png", 300, 300);
		this.game.load.spritesheet("sprites1", "games/completafrases/assets/fase1/sprites1.png", 80, 80);
		this.game.load.spritesheet("frase2", "games/completafrases/assets/fase1/frase2.png", 300, 300);
		this.game.load.spritesheet("sprites2", "games/completafrases/assets/fase1/sprites2.png", 70, 70);
		this.game.load.spritesheet("frase3", "games/completafrases/assets/fase1/frase3.png", 300, 300);
		this.game.load.spritesheet("sprites3", "games/completafrases/assets/fase1/sprites3.png", 80, 80);
		this.game.load.spritesheet("frase4", "games/completafrases/assets/fase1/frase4.png", 300, 300);
		this.game.load.spritesheet("sprites4", "games/completafrases/assets/fase1/sprites4.png", 80, 80);
		this.game.load.spritesheet("frase5", "games/completafrases/assets/fase1/frase5.png", 300, 300);
		this.game.load.spritesheet("sprites5", "games/completafrases/assets/fase1/sprites5.png", 80, 85);
		this.game.load.spritesheet("frase6", "games/completafrases/assets/fase2/frase6.png", 300, 300);
		this.game.load.spritesheet("sprites6", "games/completafrases/assets/fase2/sprites6.png", 90, 20);
		this.game.load.spritesheet("sprites6_fade", "games/completafrases/assets/fase2/sprites6_fade.png", 90, 20);
		this.game.load.spritesheet("frase7", "games/completafrases/assets/fase2/frase7.png", 300, 300);
		this.game.load.spritesheet("sprites7", "games/completafrases/assets/fase2/sprites7.png", 90, 20);
		this.game.load.spritesheet("sprites7_fade", "games/completafrases/assets/fase2/sprites7_fade.png", 90, 20);
		this.game.load.spritesheet("frase8", "games/completafrases/assets/fase2/frase8.png", 300, 300);
		this.game.load.spritesheet("sprites8", "games/completafrases/assets/fase2/sprites8.png", 90, 20);
		this.game.load.spritesheet("sprites8_fade", "games/completafrases/assets/fase2/sprites8_fade.png", 90, 20);
		this.game.load.spritesheet("frase9", "games/completafrases/assets/fase2/frase9.png", 300, 300);
		this.game.load.spritesheet("sprites9", "games/completafrases/assets/fase2/sprites9.png", 90, 20);
		this.game.load.spritesheet("sprites9_fade", "games/completafrases/assets/fase2/sprites9_fade.png", 90, 20);
		this.game.load.spritesheet("frase10", "games/completafrases/assets/fase2/frase10.png", 300, 300);
		this.game.load.spritesheet("sprites10", "games/completafrases/assets/fase2/sprites10.png", 90, 20);
		this.game.load.spritesheet("sprites10_fade", "games/completafrases/assets/fase2/sprites10_fade.png", 90, 20);

		this.game.load.spritesheet("frase11", "games/completafrases/assets/fase3/frase11.png", 300, 300);
		this.game.load.spritesheet("sprites11", "games/completafrases/assets/fase3/sprites11.png", 70, 70);
		this.game.load.spritesheet("frase12", "games/completafrases/assets/fase3/frase12.png", 300, 300);
		this.game.load.spritesheet("sprites12", "games/completafrases/assets/fase3/sprites12.png", 70, 70);
		this.game.load.spritesheet("frase13", "games/completafrases/assets/fase3/frase13.png", 300, 300);
		this.game.load.spritesheet("sprites13", "games/completafrases/assets/fase3/sprites13.png", 70, 70);
		this.game.load.spritesheet("frase14", "games/completafrases/assets/fase3/frase14.png", 300, 300);
		this.game.load.spritesheet("sprites14", "games/completafrases/assets/fase3/sprites14.png", 70, 55);
		this.game.load.spritesheet("frase15", "games/completafrases/assets/fase3/frase15.png", 300, 300);
		this.game.load.spritesheet("sprites15", "games/completafrases/assets/fase3/sprites15.png", 70, 70);

		this.game.load.spritesheet("frase16", "games/completafrases/assets/fase4/frase16.png", 300, 300);
		this.game.load.spritesheet("sprites16", "games/completafrases/assets/fase4/sprites16.png", 100, 30);
		this.game.load.spritesheet("sprites16_fade", "games/completafrases/assets/fase4/sprites16_fade.png", 100, 30);
		this.game.load.spritesheet("frase17", "games/completafrases/assets/fase4/frase17.png", 300, 300);
		this.game.load.spritesheet("sprites17", "games/completafrases/assets/fase4/sprites17.png", 100, 30);
		this.game.load.spritesheet("sprites17_fade", "games/completafrases/assets/fase4/sprites17_fade.png", 100, 30);
		this.game.load.spritesheet("frase18", "games/completafrases/assets/fase4/frase18.png", 300, 300);
		this.game.load.spritesheet("sprites18", "games/completafrases/assets/fase4/sprites18.png", 100, 30);
		this.game.load.spritesheet("sprites18_fade", "games/completafrases/assets/fase4/sprites18_fade.png", 100, 30);
		this.game.load.spritesheet("frase19", "games/completafrases/assets/fase4/frase19.png", 300, 300);
		this.game.load.spritesheet("sprites19", "games/completafrases/assets/fase4/sprites19.png", 100, 30);
		this.game.load.spritesheet("sprites19_fade", "games/completafrases/assets/fase4/sprites19_fade.png", 100, 30);
		this.game.load.spritesheet("frase20", "games/completafrases/assets/fase4/frase20.png", 300, 300);
		this.game.load.spritesheet("sprites20", "games/completafrases/assets/fase4/sprites20.png", 100, 30);
		this.game.load.spritesheet("sprites20_fade", "games/completafrases/assets/fase4/sprites20_fade.png", 100, 30);

		this.game.load.spritesheet("frase21", "games/completafrases/assets/fase5/frase21.png", 300, 300);
		this.game.load.spritesheet("sprites21_fotos", "games/completafrases/assets/fase5/sprites21_fotos.png", 70, 70);
		this.game.load.spritesheet("sprites21_palabras", "games/completafrases/assets/fase5/sprites21_palabras.png", 80, 25);
		this.game.load.spritesheet("sprites21_palabras_fade", "games/completafrases/assets/fase5/sprites21_palabras_fade.png", 80, 25);

		this.game.load.spritesheet("frase22", "games/completafrases/assets/fase5/frase22.png", 300, 300);
		this.game.load.spritesheet("sprites22_fotos", "games/completafrases/assets/fase5/sprites22_fotos.png", 70, 60);
		this.game.load.spritesheet("sprites22_palabras", "games/completafrases/assets/fase5/sprites22_palabras.png", 80, 25);
		this.game.load.spritesheet("sprites22_palabras_fade", "games/completafrases/assets/fase5/sprites22_palabras_fade.png", 80, 25);

		this.game.load.spritesheet("frase23", "games/completafrases/assets/fase5/frase23.png", 300, 300);
		this.game.load.spritesheet("sprites23_fotos", "games/completafrases/assets/fase5/sprites23_fotos.png", 70, 70);
		this.game.load.spritesheet("sprites23_palabras", "games/completafrases/assets/fase5/sprites23_palabras.png", 80, 25);
		this.game.load.spritesheet("sprites23_palabras_fade", "games/completafrases/assets/fase5/sprites23_palabras_fade.png", 80, 25);

		this.game.load.spritesheet("frase24", "games/completafrases/assets/fase5/frase24.png", 300, 300);
		this.game.load.spritesheet("sprites24_fotos", "games/completafrases/assets/fase5/sprites24_fotos.png", 70, 70);
		this.game.load.spritesheet("sprites24_palabras", "games/completafrases/assets/fase5/sprites24_palabras.png", 65, 16);
		this.game.load.spritesheet("sprites24_palabras_fade", "games/completafrases/assets/fase5/sprites24_palabras_fade.png", 65, 16);

		this.game.load.spritesheet("frase25", "games/completafrases/assets/fase5/frase25.png", 300, 300);
		this.game.load.spritesheet("sprites25_fotos", "games/completafrases/assets/fase5/sprites25_fotos.png", 70, 70);
		this.game.load.spritesheet("sprites25_palabras", "games/completafrases/assets/fase5/sprites25_palabras.png", 80, 25);
		this.game.load.spritesheet("sprites25_palabras_fade", "games/completafrases/assets/fase5/sprites25_palabras_fade.png", 80, 25);

		this.game.stage.backgroundColor = "#ffffff";
		// Cargo los audios
		this.game.load.audio("consignas", ["games/completafrases/assets/audio/completafrases/consignas.ogg"]);
		this.game.load.audio("fase1", ["games/completafrases/assets/audio/completafrases/fase1.ogg"]);
		this.game.load.audio("fase2", ["games/completafrases/assets/audio/completafrases/fase2.ogg"]);
		this.game.load.audio("fase3", ["games/completafrases/assets/audio/completafrases/fase3.ogg"]);
		this.game.load.audio("fase4", ["games/completafrases/assets/audio/completafrases/fase4.ogg"]);
		this.game.load.audio("fase5", ["games/completafrases/assets/audio/completafrases/fase5.ogg"]);
		this.game.load.audio("muybien", ["games/completafrases/assets/audio/asociaformas/muybien.ogg"]);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}