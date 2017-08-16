var levelone_colorama = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
}

levelone_colorama.prototype = {
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
		var shapeForm1;
		var shapeForm2;
		var shapeForm3;
		var shapeForm4;
		var shapeForm5;
		var shapeColor;
		var position = 90;
		var index = 0;

		if (requestedShape == 0 || requestedShape == 4 || requestedShape == 8 || requestedShape == 12 || requestedShape == 16) {
			shapeForm1 = 0;
			shapeForm2 = 4;
			shapeForm3 = 8;
			shapeForm4 = 12;
			shapeForm5 = 16;
			shapeColor = 0;
		}
		else if (requestedShape == 1 || requestedShape == 5 || requestedShape == 9 || requestedShape == 13 || requestedShape == 17) {
			shapeForm1 = 1;
			shapeForm2 = 5;
			shapeForm3 = 9;
			shapeForm4 = 13;
			shapeForm5 = 17;
			shapeColor = 1;
		}
		else if (requestedShape == 2 || requestedShape == 6 || requestedShape == 10 || requestedShape == 14 || requestedShape == 18) {
			shapeForm1 = 2;
			shapeForm2 = 6;
			shapeForm3 = 10;
			shapeForm4 = 14;
			shapeForm5 = 18;
			shapeColor = 2;
		}
		else if (requestedShape == 3 || requestedShape == 7 || requestedShape == 11 || requestedShape == 15 || requestedShape == 19) {
			shapeForm1 = 3;
			shapeForm2 = 7;
			shapeForm3 = 11;
			shapeForm4 = 15;
			shapeForm5 = 19;
			shapeColor = 3;
		}

		for (var i = 0; i < 4; ++i) {
			if (shapesToShow[index] == shapeForm1 || shapesToShow[index] == shapeForm2 || shapesToShow[index] == shapeForm3 || shapesToShow[index] == shapeForm4 || shapesToShow[index] == shapeForm5) {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFinished, this);
			}
			 else {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];
			index++;  	

			if (shapesToShow[index] == shapeForm1 || shapesToShow[index] == shapeForm2 || shapesToShow[index] == shapeForm3 || shapesToShow[index] == shapeForm4 || shapesToShow[index] == shapeForm5) {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFailed, this);
			}

			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			if (shapesToShow[index] == shapeForm1 || shapesToShow[index] == shapeForm2 || shapesToShow[index] == shapeForm3 || shapesToShow[index] == shapeForm4 || shapesToShow[index] == shapeForm5) {
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
		fx = this.game.add.audio('colores');
    	fx.allowMultiple = true;

		fx.addMarker('amarillo', 0, 2.6);
		fx.addMarker('azul', 2.7, 2.2);
		fx.addMarker('rojo', 5, 2.2);
		fx.addMarker('verde', 7.3, 2.8);

		var shapeSounds=['amarillo', 'azul', 'rojo', 'verde',];

		sound = shapeSounds[shapeColor];
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