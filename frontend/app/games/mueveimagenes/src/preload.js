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
		this.game.load.audio("muybien", ["assets/audio/colorama/muybien.ogg"]);

		// Cargo las imagenes de las figuras
		// fase 1
		this.game.load.spritesheet("hipopotamo", "assets/images/hipopotamo.png", 250, 250);
		this.game.load.spritesheet("caballo", "assets/images/caballo.png", 250, 250);
		this.game.load.spritesheet("cebra", "assets/images/cebra.png", 250, 250);
		this.game.load.spritesheet("hormiga", "assets/images/hormiga.png", 250, 250);
		this.game.load.spritesheet("boton1", "assets/images/boton1.png", 100, 40);
		this.game.load.spritesheet("boton2", "assets/images/boton2.png", 100, 40);
		this.game.load.spritesheet("boton3", "assets/images/boton3.png", 100, 40);
		this.game.load.spritesheet("boton4", "assets/images/boton4.png", 100, 40);

		//fase 2
		this.game.load.spritesheet("elefante", "assets/images/elefante.png", 250, 250);
		this.game.load.spritesheet("ciervo", "assets/images/ciervo.png", 250, 250);
		this.game.load.spritesheet("leon", "assets/images/leon.png", 250, 250);
		this.game.load.spritesheet("pajaro", "assets/images/pajaro.png", 250, 250);
		this.game.load.spritesheet("boton5", "assets/images/boton5.png", 100, 40);
		this.game.load.spritesheet("boton6", "assets/images/boton6.png", 100, 40);
		this.game.load.spritesheet("boton7", "assets/images/boton7.png", 100, 40);
		this.game.load.spritesheet("boton8", "assets/images/boton8.png", 100, 40);

		//fase 3
		this.game.load.spritesheet("desierto", "assets/images/desierto.png", 250, 250);
		this.game.load.spritesheet("ciudad", "assets/images/ciudad.png", 250, 250);
		this.game.load.spritesheet("montania", "assets/images/montania.png", 250, 250);
		this.game.load.spritesheet("bosque", "assets/images/bosque.png", 250, 250);
		this.game.load.spritesheet("boton9", "assets/images/boton9.png", 100, 40);
		this.game.load.spritesheet("boton10", "assets/images/boton10.png", 100, 40);
		this.game.load.spritesheet("boton11", "assets/images/boton11.png", 100, 40);
		this.game.load.spritesheet("boton12", "assets/images/boton12.png", 100, 40);

		//fase 4
		this.game.load.spritesheet("paraguas", "assets/images/paraguas.png", 250, 250);
		this.game.load.spritesheet("pelota", "assets/images/pelota.png", 250, 250);
		this.game.load.spritesheet("libro", "assets/images/libro.png", 250, 250);
		this.game.load.spritesheet("ropa", "assets/images/ropa.png", 250, 250);
		this.game.load.spritesheet("boton13", "assets/images/boton13.png", 100, 40);
		this.game.load.spritesheet("boton14", "assets/images/boton14.png", 100, 40);
		this.game.load.spritesheet("boton15", "assets/images/boton15.png", 100, 40);
		this.game.load.spritesheet("boton16", "assets/images/boton16.png", 100, 40);

		//fase 5
		this.game.load.spritesheet("pizza", "assets/images/pizza.png", 250, 250);
		this.game.load.spritesheet("ensalada", "assets/images/ensalada.png", 250, 250);
		this.game.load.spritesheet("hamburguesas", "assets/images/hamburguesas.png", 250, 250);
		this.game.load.spritesheet("fideos", "assets/images/fideos.png", 250, 250);
		this.game.load.spritesheet("boton17", "assets/images/boton17.png", 100, 40);
		this.game.load.spritesheet("boton18", "assets/images/boton18.png", 100, 40);
		this.game.load.spritesheet("boton19", "assets/images/boton19.png", 100, 40);
		this.game.load.spritesheet("boton20", "assets/images/boton20.png", 100, 40);
	},
  	create: function(){
		this.game.state.start("GameTitle");

	}
}