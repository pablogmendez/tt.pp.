var preload_mueveimagenes = function(game){
		console.log("%cStarting my awesome game - preload", "color:white; background:red");
}

preload_mueveimagenes.prototype = {
	preload: function(){ 
		//var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		var loadingText = this.add.sprite(0,150,"loadingText");
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","games/mueveimagenes/assets/numbers.png",100,100);
		this.game.load.image("gametitle","games/mueveimagenes/assets/gametitle.png");
		this.game.load.image("play","games/mueveimagenes/assets/play.png");
		this.game.load.image("higher","games/mueveimagenes/assets/higher.png");
		this.game.load.image("lower","games/mueveimagenes/assets/lower.png");
		this.game.load.image("gameover","games/mueveimagenes/assets/gameover.png");
        // preloading various assets
        this.game.load.spritesheet("levels", "games/mueveimagenes/assets/levels.png", this.game.global.thumbWidth, this.game.global.thumbHeight);
		this.game.load.spritesheet("level_arrows", "games/mueveimagenes/assets/level_arrows.png", 48, 48);
		this.game.load.spritesheet("level_arrows_blue", "games/mueveimagenes/assets/level_arrows_blue.png", 48, 48);
		this.game.load.spritesheet("home", "games/mueveimagenes/assets/home.png", 48, 48);
		this.game.load.spritesheet("whitescreen", "games/mueveimagenes/assets/whitescreen.png", 184, 260);
		this.game.load.spritesheet("game", "games/mueveimagenes/assets/game.png", 200, 80);
		
		// Cargo los audios
		this.game.load.audio("muybien", ["games/mueveimagenes/assets/audio/colorama/muybien.ogg"]);

		// Cargo las imagenes de las figuras
		// fase 1
		this.game.load.spritesheet("hipopotamo", "games/mueveimagenes/assets/images/hipopotamo.png", 250, 250);
		this.game.load.spritesheet("caballo", "games/mueveimagenes/assets/images/caballo.png", 250, 250);
		this.game.load.spritesheet("cebra", "games/mueveimagenes/assets/images/cebra.png", 250, 250);
		this.game.load.spritesheet("hormiga", "games/mueveimagenes/assets/images/hormiga.png", 250, 250);
		this.game.load.spritesheet("boton1", "games/mueveimagenes/assets/images/boton1.png", 100, 40);
		this.game.load.spritesheet("boton2", "games/mueveimagenes/assets/images/boton2.png", 100, 40);
		this.game.load.spritesheet("boton3", "games/mueveimagenes/assets/images/boton3.png", 100, 40);
		this.game.load.spritesheet("boton4", "games/mueveimagenes/assets/images/boton4.png", 100, 40);

		//fase 2
		this.game.load.spritesheet("elefante", "games/mueveimagenes/assets/images/elefante.png", 250, 250);
		this.game.load.spritesheet("ciervo", "games/mueveimagenes/assets/images/ciervo.png", 250, 250);
		this.game.load.spritesheet("leon", "games/mueveimagenes/assets/images/leon.png", 250, 250);
		this.game.load.spritesheet("pajaro", "games/mueveimagenes/assets/images/pajaro.png", 250, 250);
		this.game.load.spritesheet("boton5", "games/mueveimagenes/assets/images/boton5.png", 100, 40);
		this.game.load.spritesheet("boton6", "games/mueveimagenes/assets/images/boton6.png", 100, 40);
		this.game.load.spritesheet("boton7", "games/mueveimagenes/assets/images/boton7.png", 100, 40);
		this.game.load.spritesheet("boton8", "games/mueveimagenes/assets/images/boton8.png", 100, 40);

		//fase 3
		this.game.load.spritesheet("desierto", "games/mueveimagenes/assets/images/desierto.png", 250, 250);
		this.game.load.spritesheet("ciudad", "games/mueveimagenes/assets/images/ciudad.png", 250, 250);
		this.game.load.spritesheet("montania", "games/mueveimagenes/assets/images/montania.png", 250, 250);
		this.game.load.spritesheet("bosque", "games/mueveimagenes/assets/images/bosque.png", 250, 250);
		this.game.load.spritesheet("boton9", "games/mueveimagenes/assets/images/boton9.png", 100, 40);
		this.game.load.spritesheet("boton10", "games/mueveimagenes/assets/images/boton10.png", 100, 40);
		this.game.load.spritesheet("boton11", "games/mueveimagenes/assets/images/boton11.png", 100, 40);
		this.game.load.spritesheet("boton12", "games/mueveimagenes/assets/images/boton12.png", 100, 40);

		//fase 4
		this.game.load.spritesheet("paraguas", "games/mueveimagenes/assets/images/paraguas.png", 250, 250);
		this.game.load.spritesheet("pelota", "games/mueveimagenes/assets/images/pelota.png", 250, 250);
		this.game.load.spritesheet("libro", "games/mueveimagenes/assets/images/libro.png", 250, 250);
		this.game.load.spritesheet("ropa", "games/mueveimagenes/assets/images/ropa.png", 250, 250);
		this.game.load.spritesheet("boton13", "games/mueveimagenes/assets/images/boton13.png", 100, 40);
		this.game.load.spritesheet("boton14", "games/mueveimagenes/assets/images/boton14.png", 100, 40);
		this.game.load.spritesheet("boton15", "games/mueveimagenes/assets/images/boton15.png", 100, 40);
		this.game.load.spritesheet("boton16", "games/mueveimagenes/assets/images/boton16.png", 100, 40);

		//fase 5
		this.game.load.spritesheet("pizza", "games/mueveimagenes/assets/images/pizza.png", 250, 250);
		this.game.load.spritesheet("ensalada", "games/mueveimagenes/assets/images/ensalada.png", 250, 250);
		this.game.load.spritesheet("hamburguesas", "games/mueveimagenes/assets/images/hamburguesas.png", 250, 250);
		this.game.load.spritesheet("fideos", "games/mueveimagenes/assets/images/fideos.png", 250, 250);
		this.game.load.spritesheet("boton17", "games/mueveimagenes/assets/images/boton17.png", 100, 40);
		this.game.load.spritesheet("boton18", "games/mueveimagenes/assets/images/boton18.png", 100, 40);
		this.game.load.spritesheet("boton19", "games/mueveimagenes/assets/images/boton19.png", 100, 40);
		this.game.load.spritesheet("boton20", "games/mueveimagenes/assets/images/boton20.png", 100, 40);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}