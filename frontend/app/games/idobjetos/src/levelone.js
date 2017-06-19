var levelone = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
}

levelone.prototype = {
  	create: function(){
  		intentos = 0;
		// showing level title
		var style = {
			font: "16px Arial",
			fill: "#ffffff"
		};
		var levelTitle = this.game.add.text(5,5,"Nivel "+this.game.global.level,style);
		levelTitle.align = "left";
        //levelTitle.x = (this.game.width - levelTitle.width) / 2; 

		var levelScore = this.game.add.text(0,5,"Puntaje "+this.game.global.score,style);
		levelScore.align = "right";
        levelScore.x = (this.game.width - levelScore.width - 5); 

		// left arrow button, to turn one page left
		leftArrow = this.game.add.button(0,this.game.height - 60,"level_arrows_blue",this.levelSelect,this);
		//leftArrow.anchor.setTo(0.5);
		leftArrow.x = (this.game.width - leftArrow.width) / 2; 
		leftArrow.frame = 0;

		var shapesToShow=[];
		for(var i = 0; i < 12; ++i) {
			shapesToShow.push(Math.floor((Math.random() * 12) + 0));
		}

		var requestedShape = shapesToShow[Math.floor((Math.random() * 12))];
		var position = 90;
		var index = 0;

		if(this.game.global.level == 1) {
			var sheet="animales";
		}
		else if (this.game.global.level == 2) {
			var sheet="animales1";
		}
		else if (this.game.global.level == 3) {
			var sheet="animales2";
		}
		else if (this.game.global.level == 4) {
			var sheet="animales3";
		}

		for (var i = 0; i < 4; ++i) {
			if (shapesToShow[index] == requestedShape) {
				var gameThumb = this.game.add.button(50, position, sheet, this.levelFinished, this);
			}
			 else {
				var gameThumb = this.game.add.button(50, position, sheet, this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];
			index++;  	

			if (shapesToShow[index] == requestedShape) {
				gameThumb = this.game.add.button(this.game.width/2, position, sheet, this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width/2, position, sheet, this.levelFailed, this);
			}

			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			if (shapesToShow[index] == requestedShape) {
				gameThumb = this.game.add.button(this.game.width-50, position, sheet, this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width-50, position, sheet, this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			position = position + 90;
		}


		//	Here we set-up our audio sprite
		fx = this.game.add.audio('animales');
    	fx.allowMultiple = true;

		fx.addMarker('caballo', 0, 2.0);
		fx.addMarker('camello', 2, 1.7);
		fx.addMarker('ciervo', 3.8, 1.8);
		fx.addMarker('cebra', 5.6, 1.6);
		fx.addMarker('hipopotamo', 7.2, 1.7);
		fx.addMarker('lobo', 8.9, 1.8);
		fx.addMarker('jirafa', 10.7, 1.8);
		fx.addMarker('gato', 12.5, 1.7);
		fx.addMarker('serpiente', 14.1, 1.9);
		fx.addMarker('rana', 16.0, 1.9);
		fx.addMarker('paloma', 17.9, 2.2);
		fx.addMarker('tiburon', 19.9, 2.0);

		var shapeSounds=['caballo', 'camello', 'ciervo', 'cebra',
		'hipopotamo', 'lobo', 'jirafa', 'gato',
		'serpiente', 'rana', 'paloma', 'tiburon',];

		sound = shapeSounds[requestedShape];
		fx.play(sound);
	},

	levelSelect: function(button) {
		this.game.state.start("LevelSelect");

		errorScreen = this.game.add.sprite(0,0,"whitescreen");
		errorScreen.height = this.game.height;
    	errorScreen.width = this.game.width;
    	errorScreen.alpha =this.game.global.alpha;
		leftArrow.inputEnabled = false;
    	this.game.time.events.add(Phaser.Timer.SECOND * 2, this.fadePicture, this);
	},

	levelFailed: function(button) {
		intentos++;
		errorScreen = this.game.add.sprite(0,0,"whitescreen");
		errorScreen.height = this.game.height;
    	errorScreen.width = this.game.width;
    	errorScreen.alpha =this.game.global.alpha;
		leftArrow.inputEnabled = false;
		if (this.game.global.score -10 <= 0) {
    		this.game.global.score = 0;
    	}
    	else {
    		this.game.global.score -= 10;	
    	}
    	this.game.time.events.add(Phaser.Timer.SECOND * 2, this.fadePicture, this);

	},

	fadePicture: function() {
    	errorScreen.destroy();
    	leftArrow.inputEnabled = true;
    	fx.play(sound);
	},

	levelFinished: function(button){
		var muyBien = this.game.add.audio('muybien');
    	muyBien.allowMultiple = true;
    	muyBien.play();

		this.game.global.score += 50;	
		intentos++;

		if(intentos == 1) {
			this.game.global.starsArray[this.game.global.level-1] = 3;
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos == 2) {
			this.game.global.starsArray[this.game.global.level-1] = 2;	
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos == 3) {
			this.game.global.starsArray[this.game.global.level-1] = 1;
		}
		else if (intentos > 3) {
			this.game.global.starsArray[this.game.global.level-1] = 0;
		}
		this.game.state.start("LevelSelect");
	}
}  