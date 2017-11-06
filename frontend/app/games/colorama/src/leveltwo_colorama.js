var leveltwo_colorama = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
}

leveltwo_colorama.prototype = {
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
			shapesToShow.push(Math.floor((Math.random() * 20) + 0));
		}

		var requestedShape = shapesToShow[Math.floor((Math.random() * 12))];
		var minShape;
		var maxShape;
		var shapeForm;
		var position = 90;
		var index = 0;

		if (requestedShape >= 0 && requestedShape <= 3) {
			minShape = 0;
			maxShape = 3;
			shapeForm = 0;
		}
		else if (requestedShape >= 4 && requestedShape <= 7) {
			minShape = 4;
			maxShape = 7;
			shapeForm = 1;
		}
		else if (requestedShape >= 8 && requestedShape <= 11) {
			minShape = 8;
			maxShape = 11;
			shapeForm = 2;
		}
		else if (requestedShape >= 12 && requestedShape <= 15) {
			minShape = 12;
			maxShape = 15;
			shapeForm = 3;
		}
		else if (requestedShape >= 16 && requestedShape <= 19) {
			minShape = 16;
			maxShape = 19;
			shapeForm = 4;
		}

		for (var i = 0; i < 4; ++i) {
			if (shapesToShow[index] >= minShape && shapesToShow[index] <= maxShape) {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFinished, this);
			}
			 else {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];
			index++;  	

			if (shapesToShow[index] >= minShape && shapesToShow[index] <= maxShape) {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFailed, this);
			}

			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			if (shapesToShow[index] >= minShape && shapesToShow[index] <= maxShape) {
				gameThumb = this.game.add.button(this.game.width-50, position, "formas", this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width-50, position, "formas", this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			position = position + 90;
		}


		//	Here we set-up our audio sprite
		fx = this.game.add.audio('figuras');
    	fx.allowMultiple = true;

		fx.addMarker('circulo', 0, 3.0);
		fx.addMarker('cuadrado', 3, 3.0);
		fx.addMarker('hexagono', 6, 2.8);
		fx.addMarker('trapecio', 9, 2.8);
		fx.addMarker('triangulo', 12, 3.0);

		var shapeSounds=['circulo', 'cuadrado', 'hexagono', 'trapecio',	'triangulo',];

		sound = shapeSounds[shapeForm];
		fx.play(sound);
		//fx.play(shapeSounds[3]);
        // showing game thumbnails
		/*for(var i=0; i<=3; i++){
			var gameThumb = this.game.add.button(this.game.width/2, 90*(i+1), "formas", this.levelFinished, this);
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = i;  	
		}*/

	},

	levelSelect: function(button) {
		this.game.global.abandon = true;
		this.game.state.start("LevelSelect");

/*		errorScreen = this.game.add.sprite(0,0,"whitescreen");
		errorScreen.height = this.game.height;
    	errorScreen.width = this.game.width;
    	errorScreen.alpha =this.game.global.alpha;
		leftArrow.inputEnabled = false;
    	this.game.time.events.add(Phaser.Timer.SECOND * 2, this.fadePicture, this);*/
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

		// did we improved our stars in current level?
	//	if(this.game.global.starsArray[this.game.global.level-1]<button.frame){
	//		this.game.global.starsArray[this.game.global.level-1] = button.frame;
	//	}
		// if we completed a level and next level is locked - and exists - then unlock it
	//	if(button.frame>0 && this.game.global.starsArray[this.game.global.level]==4 && this.game.global.level<this.game.global.starsArray.length){
	//		this.game.global.starsArray[this.game.global.level] = 0;	
	//	}
		// back to level selection
		this.game.state.start("LevelSelect");
	}
}  