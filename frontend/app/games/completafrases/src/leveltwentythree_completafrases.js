var leveltwentythree_completafrases = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
	var aciertos;
	var spritesAvailable;
	var spritesThumb;
	var shapeSounds;
}

leveltwentythree_completafrases.prototype = {
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

		var levelScore = this.game.add.text(0,5,"Puntaje "+this.game.global.score,style);
		levelScore.align = "right";
        levelScore.x = (this.game.width - levelScore.width - 5); 

		// left arrow button, to turn one page left
		leftArrow = this.game.add.button(0,this.game.height - 60,"level_arrows_blue",this.levelSelect,this);

		leftArrow.x = (this.game.width - leftArrow.width) / 2; 
		leftArrow.frame = 0;

		var gameThumb = this.game.add.sprite(0, 25, "frase23");

		var position = 370;
		var posX = [this.game.width/2 -70, this.game.width/2 +70, this.game.width/2 -70, this.game.width/2 +70];
		var posY = [ position-20, position-20, position+30, position+30];
		var coord = [0, 1, 2, 3];

		// Telefono this.game.width/2 -110, 110
		// Camino this.game.width/2 +80, 110
		// Amigo this.game.width/2 -110, 300

		var gameThumb11 = this.game.add.sprite(this.game.width/2 -65, 190, "sprites23_fotos");
		gameThumb11.anchor.setTo(0.5);
		gameThumb11.frame = 1;
		this.game.physics.arcade.enable(gameThumb11);
		gameThumb11.tint= 0x000000;

		var gameThumb12 = this.game.add.sprite(this.game.width/2 -125, 87, "sprites23_fotos");
		gameThumb12.anchor.setTo(0.5);
		gameThumb12.frame = 2;
		this.game.physics.arcade.enable(gameThumb12);
		gameThumb12.tint= 0x000000;

		var gameThumb13 = this.game.add.sprite(this.game.width/2-130, 280, "sprites23_palabras_fade");
		gameThumb13.anchor.setTo(0.5);
		gameThumb13.frame = 1;
		this.game.physics.arcade.enable(gameThumb13);
		gameThumb13.tint= 0x000000;

		var gameThumb14 = this.game.add.sprite(this.game.width/2-15, 255, "sprites23_palabras_fade");
		gameThumb14.anchor.setTo(0.5);
		gameThumb14.frame = 2;
		this.game.physics.arcade.enable(gameThumb14);
		gameThumb14.tint= 0x000000;

		var gameThumb1 = this.game.add.sprite(posX[coord[0]], posY[coord[0]], "sprites23_fotos");
		var gameThumb2 = this.game.add.sprite(posX[coord[1]], posY[coord[1]], "sprites23_fotos");
		var gameThumb3 = this.game.add.sprite(posX[coord[2]], posY[coord[2]], "sprites23_palabras");
		var gameThumb4 = this.game.add.sprite(posX[coord[3]], posY[coord[3]], "sprites23_palabras");

		gameThumb1.anchor.setTo(0.5);
		gameThumb1.frame = 1;
		this.game.physics.arcade.enable(gameThumb1);
		gameThumb1.inputEnabled = true;
	    gameThumb1.input.enableDrag();
	    gameThumb1.originalPosition = gameThumb1.position.clone();


		gameThumb1.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb11);
		}, this);

		gameThumb2.anchor.setTo(0.5);
		gameThumb2.frame = 2;
		this.game.physics.arcade.enable(gameThumb2);
		gameThumb2.inputEnabled = true;
	    gameThumb2.input.enableDrag();
	    gameThumb2.originalPosition = gameThumb2.position.clone();


		gameThumb2.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb12);
		}, this);

		gameThumb3.anchor.setTo(0.5);
		gameThumb3.frame = 1;
		this.game.physics.arcade.enable(gameThumb3);
		gameThumb3.inputEnabled = true;
	    gameThumb3.input.enableDrag();
	    gameThumb3.originalPosition = gameThumb3.position.clone();


		gameThumb3.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb13);
		}, this);

		gameThumb4.anchor.setTo(0.5);
		gameThumb4.frame = 2;
		this.game.physics.arcade.enable(gameThumb4);
		gameThumb4.inputEnabled = true;
	    gameThumb4.input.enableDrag();
	    gameThumb4.originalPosition = gameThumb4.position.clone();


		gameThumb4.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, gameThumb14);
		}, this);

		//	Here we set-up our audio sprite
		fx = this.game.add.audio('consignas');
    	fx.allowMultiple = true;
		fx.addMarker('consigna', 14, 4.0);
		fx.play('consigna');
	},

	levelSelect: function(button) {
		this.game.state.start("LevelSelect");
	},

	playPhrase: function() {
		fx2 = this.game.add.audio('fase5');
    	fx2.allowMultiple = true;
		fx2.addMarker('resp', 28, 13.0);
		fx2.onStop.addOnce(function() {  this.levelFinished();}, this);
		fx2.play('resp');

	},

	levelFinished: function(){
		var muyBien = this.game.add.audio('muybien');
    	muyBien.allowMultiple = true;
    	muyBien.play();

		this.game.global.score += 50;	
		intentos++;

		if(intentos <= 5) {
			this.game.global.starsArray[this.game.global.level-1] = 3;
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos >= 6 && intentos <= 9) {
			this.game.global.starsArray[this.game.global.level-1] = 2;	
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos >= 10 && intentos <= 12) {
			this.game.global.starsArray[this.game.global.level-1] = 1;
		}
		else if (intentos > 12) {
			this.game.global.starsArray[this.game.global.level-1] = 0;
		}
		this.game.state.start("LevelSelect");
	},

  	stopDrag1: function(currentSprite, endSprite){
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
  		if(aciertos == 4) {
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