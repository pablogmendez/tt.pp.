var levelthree_colorama= function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
}

levelthree_colorama.prototype = {
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
		var position = 90;
		var index = 0;

		for (var i = 0; i < 4; ++i) {
			if (shapesToShow[index] == requestedShape) {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFinished, this);
			}
			 else {
				var gameThumb = this.game.add.button(50, position, "formas", this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];
			index++;  	

			if (shapesToShow[index] == requestedShape) {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFinished, this);
			} 
			else {
				gameThumb = this.game.add.button(this.game.width/2, position, "formas", this.levelFailed, this);
			}

			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[index];  	
			index++;

			if (shapesToShow[index] == requestedShape) {
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
		fx = this.game.add.audio('formas');
    	fx.allowMultiple = true;

		fx.addMarker('circuloamarillo', 0, 2.0);
		fx.addMarker('circuloazul', 2, 1.9);
		fx.addMarker('circulorojo', 3.8, 1.8);
		fx.addMarker('circuloverde', 5.6, 1.6);
		fx.addMarker('cuadradoamarillo', 7.2, 1.7);
		fx.addMarker('cuadradoazul', 8.9, 1.8);
		fx.addMarker('cuadradorojo', 10.7, 1.8);
		fx.addMarker('cuadradoverde', 12.5, 1.7);
		fx.addMarker('hexagonoamarillo', 14.1, 1.7);
		fx.addMarker('hexagonoazul', 15.8, 1.9);
		fx.addMarker('hexagonorojo', 17.5, 2.0);
		fx.addMarker('hexagonoverde', 19.5, 1.8);
		fx.addMarker('trapecioamarillo', 21, 2.0);
		fx.addMarker('trapecioazul', 23, 1.8);
		fx.addMarker('trapeciorojo', 24.8, 1.8);
		fx.addMarker('trapecioverde', 26.5, 1.6);
		fx.addMarker('trianguloamarillo', 28, 2.0);
		fx.addMarker('trianguloazul', 30, 2.0);
		fx.addMarker('triangulorojo', 32, 1.8);
		fx.addMarker('trianguloverde', 33.9, 2.0);

		var shapeSounds=['circuloamarillo', 'circuloazul', 'circulorojo', 'circuloverde',
		'cuadradoamarillo', 'cuadradoazul', 'cuadradorojo', 'cuadradoverde',
		'hexagonoamarillo', 'hexagonoazul', 'hexagonorojo', 'hexagonoverde',
		'trapecioamarillo', 'trapecioazul', 'trapeciorojo', 'trapecioverde',
		'trianguloamarillo', 'trianguloazul', 'triangulorojo', 'trianguloverde',];

		sound = shapeSounds[requestedShape];
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