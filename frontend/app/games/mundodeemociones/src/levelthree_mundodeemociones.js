var levelthree_mundodeemociones = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
	var aciertos;
	var spritesAvailable;
	var spritesThumb;
	var requestedShape;
}

levelthree_mundodeemociones.prototype = {
  	create: function(){
  		intentos = 0;
  		aciertos = 0;
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

		var shapesList=[0, 1, 2, 3, 4, 5];
		var shapesListShuffle = shuffle(shapesList);
		var shapesToShow=[];
		for(var i = 0; i < 3; ++i) {
			shapesToShow.push(shapesListShuffle[i]);
		}

		requestedShape = shapesToShow[Math.floor((Math.random() * 3))];

		var gameThumb = this.game.add.sprite(this.game.width/2 -80, 70, "smiles");
		gameThumb.frame = requestedShape;

		var gameThumb7 = this.game.add.sprite(this.game.width/2, 120, "ojos");
		gameThumb7.anchor.setTo(0.5);
		gameThumb7.frame = requestedShape;
		this.game.physics.arcade.enable(gameThumb7);
		gameThumb7.tint= 0x000000;

		var gameThumb8 = this.game.add.sprite(this.game.width/2, 175, "bocas");
		gameThumb8.anchor.setTo(0.5);
		gameThumb8.frame = requestedShape;
		this.game.physics.arcade.enable(gameThumb8);
		gameThumb8.tint= 0x000000;

		// Organos
		var gameThumb1 = this.game.add.sprite(this.game.width/2 -110, 295, "ojos");
		gameThumb1.frame = shapesToShow[0];
		gameThumb1.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb1);
		gameThumb1.inputEnabled = true;
	    gameThumb1.input.enableDrag();
	    gameThumb1.originalPosition = gameThumb1.position.clone();
		gameThumb1.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb7);
		}, this);


		var gameThumb2 = this.game.add.sprite(this.game.width/2, 295, "ojos");
		gameThumb2.frame = shapesToShow[1];
		gameThumb2.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb2);
		gameThumb2.inputEnabled = true;
	    gameThumb2.input.enableDrag();
	    gameThumb2.originalPosition = gameThumb2.position.clone();
		gameThumb2.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb7);
		}, this);

		var gameThumb3 = this.game.add.sprite(this.game.width/2 +110, 295, "ojos");
		gameThumb3.frame = shapesToShow[2];
		gameThumb3.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb3);
		gameThumb3.inputEnabled = true;
	    gameThumb3.input.enableDrag();
	    gameThumb3.originalPosition = gameThumb3.position.clone();
		gameThumb3.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb7);
		}, this);

		var gameThumb4 = this.game.add.sprite(this.game.width/2 -100, 350, "bocas");
		gameThumb4.frame = shapesToShow[2];
		gameThumb4.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb4);
		gameThumb4.inputEnabled = true;
	    gameThumb4.input.enableDrag();
	    gameThumb4.originalPosition = gameThumb4.position.clone();
		gameThumb4.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb8);
		}, this);


		var gameThumb5 = this.game.add.sprite(this.game.width/2, 350, "bocas");
		gameThumb5.frame = shapesToShow[0];
		gameThumb5.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb5);
		gameThumb5.inputEnabled = true;
	    gameThumb5.input.enableDrag();
	    gameThumb5.originalPosition = gameThumb5.position.clone();
		gameThumb5.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb8);
		}, this);


		var gameThumb6 = this.game.add.sprite(this.game.width/2 +100, 350, "bocas");
		gameThumb6.frame = shapesToShow[1];
		gameThumb6.anchor.setTo(0.5);
		this.game.physics.arcade.enable(gameThumb6);
		gameThumb6.inputEnabled = true;
	    gameThumb6.input.enableDrag();
	    gameThumb6.originalPosition = gameThumb6.position.clone();
		gameThumb6.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb8);
		}, this);

		// -------


		fx = this.game.add.audio('emociones2');

		fx.addMarker('emocion1', 0, 2.4);
		fx.addMarker('emocion2', 2.4, 2.4);
		fx.addMarker('emocion3', 4.8, 2.3);
		fx.addMarker('emocion4', 7.1, 2.3);
		fx.addMarker('emocion5', 9.4, 2.3);
		fx.addMarker('emocion6', 11.7, 2.3);

		var shapeSounds=['emocion1', 'emocion2', 'emocion3', 'emocion4', 'emocion5', 'emocion6'];

		//	Here we set-up our audio sprite
    	fx.allowMultiple = true;
		fx.play(shapeSounds[requestedShape]);
	},

	levelSelect: function(button) {
		this.game.state.start("LevelSelect");
	},

	levelFinished: function(){
		var muyBien = this.game.add.audio('muybien');
    	muyBien.allowMultiple = true;
    	muyBien.play();

		this.game.global.score += 50;	
		intentos++;

		if(intentos == 2) {
			this.game.global.starsArray[this.game.global.level-1] = 3;
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos >= 3 && intentos <= 5) {
			this.game.global.starsArray[this.game.global.level-1] = 2;	
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos >= 5 && intentos <= 8) {
			this.game.global.starsArray[this.game.global.level-1] = 1;
		}
		else if (intentos > 8) {
			this.game.global.starsArray[this.game.global.level-1] = 0;
		}
		this.game.state.start("LevelSelect");
	},

	stopDrag1: function(currentSprite, endSprite){
		intentos++;
		if(currentSprite.frame != requestedShape) {
			currentSprite.position.copyFrom(currentSprite.originalPosition);
		}
		else {
			 if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
			 	aciertos++;
			    currentSprite.input.draggable = false;
			    currentSprite.position.copyFrom(endSprite.position); 
			    currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
	  		})) { currentSprite.position.copyFrom(currentSprite.originalPosition);}
			 	if(aciertos == 2) {
			    	this.levelFinished();
			    }
		}
  	},

  	stopDrag: function(currentSprite, endSprite){
  		intentos++;
    	if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
    		currentSprite.input.draggable = false;
    		currentSprite.position.copyFrom(endSprite.position); 
    		currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
    		aciertos++;
  			}
  			)) 
    		{ currentSprite.position.copyFrom(currentSprite.originalPosition);
  		}
  		if(aciertos == 3) {
    		this.playPhrase();
    	}
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