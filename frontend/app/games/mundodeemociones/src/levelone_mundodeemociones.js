var levelone_mundodeemociones = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
}

levelone_mundodeemociones.prototype = {
  	create: function(){
  		intentos = 0;
		// showing level title
		var style = {
			font: "16px Arial",
			fill: "#000000"
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


		var posx = [this.game.width/2 -50, this.game.width/2 +50, this.game.width/2, this.game.width/2 -50, this.game.width/2 +50];
		var posy = [90, 90, 205, 320, 320];

		var shapesList=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		var shapesListShuffle = shuffle(shapesList);
		var shapesToShow=[];
		for(var i = 0; i < 5; ++i) {
			shapesToShow.push(shapesListShuffle[i]);
		}

		var requestedShape = shapesToShow[Math.floor((Math.random() * 5))];

		for(var i = 0; i < 5; ++i) {
			if (shapesToShow[i] == requestedShape) {
				var gameThumb = this.game.add.button(posx[i], posy[i], "emociones", this.levelFinished, this);
			}
			else {
				var gameThumb = this.game.add.button(posx[i], posy[i], "emociones", this.levelFailed, this);
			}
			gameThumb.anchor.setTo(0.5);
			gameThumb.frame = shapesToShow[i];  
		}

		//	Here we set-up our audio sprite
		fx = this.game.add.audio('emociones1');
    	fx.allowMultiple = true;

		fx.addMarker('emocion1', 0, 2.6);
		fx.addMarker('emocion2', 2.6, 2.6);
		fx.addMarker('emocion3', 5.2, 2.6);
		fx.addMarker('emocion4', 7.8, 2.6);
		fx.addMarker('emocion5', 10.4, 2.6);
		fx.addMarker('emocion6', 12.8, 2.6);
		fx.addMarker('emocion7', 15.4, 2.6);
		fx.addMarker('emocion8', 17.8, 2.6);
		fx.addMarker('emocion9', 20.4, 2.6);
		fx.addMarker('emocion10', 22.8, 2.6);

		var shapeSounds=['emocion1', 'emocion2', 'emocion3', 'emocion4', 'emocion5', 'emocion6', 'emocion7', 'emocion8', 'emocion9', 'emocion10'];

		sound = shapeSounds[requestedShape];
		fx.play(sound);

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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}