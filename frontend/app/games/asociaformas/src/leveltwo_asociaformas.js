var leveltwo_asociaformas = function(game){
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

leveltwo_asociaformas.prototype = {
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

		var shapesToShow=[];
		for(var i = 0; i < 4; ++i) {
			shapesToShow.push(Math.floor((Math.random() * 12)));
		}

		var position = 90;
		var index = 0;

		var posX = [this.game.width/2 +50, this.game.width/2 +50, this.game.width/2 +50, this.game.width/2 +50];
		var posY = [position, position*2, position*3, position*4];
		var coord = [0, 1, 2, 3];
			
		var gameThumb20 = this.game.add.sprite(posX[coord[0]], posY[coord[0]], "comidas_frames");
		var gameThumb21 = this.game.add.sprite(posX[coord[1]], posY[coord[1]], "comidas_frames");
		var gameThumb22 = this.game.add.sprite(posX[coord[2]], posY[coord[2]], "comidas_frames");
		var gameThumb23 = this.game.add.sprite(posX[coord[3]], posY[coord[3]], "comidas_frames");

		if(this.game.global.level == 4) {
			var gameThumb = this.game.add.sprite(posX[coord[0]] - 50, posY[coord[0]], "comidas_fade");
			var gameThumb2 = this.game.add.sprite(posX[coord[1]] - 50, posY[coord[1]], "comidas_fade");
			var gameThumb4 = this.game.add.sprite(posX[coord[2]] - 50, posY[coord[2]], "comidas_fade");
			var gameThumb6 = this.game.add.sprite(posX[coord[3]] - 50, posY[coord[3]], "comidas_fade");
		}
		else if (this.game.global.level == 5) {
			var gameThumb = this.game.add.sprite(posX[coord[0]] - 50, posY[coord[0]], "comidas_black");
			var gameThumb2 = this.game.add.sprite(posX[coord[1]] - 50, posY[coord[1]], "comidas_black");
			var gameThumb4 = this.game.add.sprite(posX[coord[2]] - 50, posY[coord[2]], "comidas_black");
			var gameThumb6 = this.game.add.sprite(posX[coord[3]] - 50, posY[coord[3]], "comidas_black");
		}
		else if (this.game.global.level == 6) {
			var gameThumb = this.game.add.sprite(posX[coord[0]] - 50, posY[coord[0]], "comidas_withe");
			var gameThumb4 = this.game.add.sprite(posX[coord[2]] - 50, posY[coord[2]], "comidas_withe");
			var gameThumb2 = this.game.add.sprite(posX[coord[1]] - 50, posY[coord[1]], "comidas_withe");
			var gameThumb6 = this.game.add.sprite(posX[coord[3]] - 50, posY[coord[3]], "comidas_withe");
		}


		var gameThumb10 = this.game.add.sprite(50, posY[coord[0]], "comidas_norm");
		var gameThumb11 = this.game.add.sprite(50, posY[coord[1]], "comidas_norm");
		var gameThumb12 = this.game.add.sprite(50, posY[coord[2]], "comidas_norm");
		var gameThumb13 = this.game.add.sprite(50, posY[coord[3]], "comidas_norm");

		console.log(shapesToShow);
		gameThumb.anchor.setTo(0.5);
		
		gameThumb.frame = shapesToShow[0];

		this.game.physics.arcade.enable(gameThumb);


		gameThumb2.anchor.setTo(0.5);
		gameThumb2.frame = shapesToShow[1];
		this.game.physics.arcade.enable(gameThumb2);

		gameThumb4.anchor.setTo(0.5);
		gameThumb4.frame = shapesToShow[2];
		this.game.physics.arcade.enable(gameThumb4);

		gameThumb6.anchor.setTo(0.5);
		gameThumb6.frame = shapesToShow[3];
		this.game.physics.arcade.enable(gameThumb6);

		spritesAvailable = [false, false, false, false];		
		spritesThumb = [gameThumb, gameThumb2, gameThumb4, gameThumb6];

		gameThumb20.anchor.setTo(0.5);
		gameThumb20.frame = shapesToShow[0];

		gameThumb21.anchor.setTo(0.5);
		gameThumb21.frame = shapesToShow[1];

		gameThumb22.anchor.setTo(0.5);
		gameThumb22.frame = shapesToShow[2];

		gameThumb23.anchor.setTo(0.5);
		gameThumb23.frame = shapesToShow[3];

		var shapesToShowShuffle = shapesToShow.slice();
		shapesToShowShuffle = shuffle(shapesToShowShuffle);

		gameThumb10.anchor.setTo(0.5);
		gameThumb10.frame = shapesToShowShuffle[0];
		this.game.physics.arcade.enable(gameThumb10);
		gameThumb10.inputEnabled = true;
	    gameThumb10.input.enableDrag();
	    gameThumb10.originalPosition = gameThumb10.position.clone();
		
		gameThumb11.anchor.setTo(0.5);
		gameThumb11.frame = shapesToShowShuffle[1];
		this.game.physics.arcade.enable(gameThumb11);
		gameThumb11.inputEnabled = true;
	    gameThumb11.input.enableDrag();
	    gameThumb11.originalPosition = gameThumb11.position.clone();

		gameThumb12.anchor.setTo(0.5);
		gameThumb12.frame = shapesToShowShuffle[2];
		this.game.physics.arcade.enable(gameThumb12);
		gameThumb12.inputEnabled = true;
	    gameThumb12.input.enableDrag();
	    gameThumb12.originalPosition = gameThumb12.position.clone();

		gameThumb13.anchor.setTo(0.5);
		gameThumb13.frame = shapesToShowShuffle[3];
		this.game.physics.arcade.enable(gameThumb13);
		gameThumb13.inputEnabled = true;
	    gameThumb13.input.enableDrag();
	    gameThumb13.originalPosition = gameThumb13.position.clone();


		var i = 0;
		var vector1=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if(shapesToShow[j] == shapesToShowShuffle[i]) {
				switch(j) {
					case 0:
						vector1.push(gameThumb);
						break;
					case 1:
						vector1.push(gameThumb2);
						break;
					case 2:
						vector1.push(gameThumb4);
						break;
					case 3:
						vector1.push(gameThumb6);
						break;
				}
			}
		}

		gameThumb10.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector1);
		}, this);

		// -------------------------------------------------------------------

		i++;
		var vector2=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if(shapesToShow[j] == shapesToShowShuffle[i]) {
				switch(j) {
					case 0:
						vector2.push(gameThumb);
						break;
					case 1:
						vector2.push(gameThumb2);
						break;
					case 2:
						vector2.push(gameThumb4);
						break;
					case 3:
						vector2.push(gameThumb6);
						break;
				}
			}
		}

		gameThumb11.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector2);
		}, this);

		// --------------------------------------------------------------

		i++;
		var vector3=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if(shapesToShow[j] == shapesToShowShuffle[i]) {
				switch(j) {
					case 0:
						vector3.push(gameThumb);
						break;
					case 1:
						vector3.push(gameThumb2);
						break;
					case 2:
						vector3.push(gameThumb4);
						break;
					case 3:
						vector3.push(gameThumb6);
						break;
				}
			}
		}

		gameThumb12.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector3);
		}, this);

		// --------------------------------------------------------------


		i++;
		var vector4=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if(shapesToShow[j] == shapesToShowShuffle[i]) {
				switch(j) {
					case 0:
						vector4.push(gameThumb);
						break;
					case 1:
						vector4.push(gameThumb2);
						break;
					case 2:
						vector4.push(gameThumb4);
						break;
					case 3:
						vector4.push(gameThumb6);
						break;
				}
			}
		}

		gameThumb13.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector4);
		}, this);

		// --------------------------------------------------------------

		//	Here we set-up our audio sprite
		fx = this.game.add.audio('consignas');
    	fx.allowMultiple = true;
		fx.addMarker('consigna', 4.1, 4.0);
		fx.play('consigna');

		// Cargo los audios de las respuestas
		fx2 = this.game.add.audio('respestas_comidas');
    	fx2.allowMultiple = true;
		fx2.addMarker('cafetera', 0, 2.7);
		fx2.addMarker('agua', 2.8, 2.0);
		fx2.addMarker('tomate', 4.8, 3.2);
		fx2.addMarker('trigo', 8.1, 3.0);
		fx2.addMarker('vaca', 11.3, 2.5);
		fx2.addMarker('huevos', 14.0, 2.0);
		fx2.addMarker('aveja', 16.1, 2.0);
		fx2.addMarker('oveja', 18.2, 2.0);
		fx2.addMarker('jugo', 20.3, 3.0);
		fx2.addMarker('manzana', 23.4, 2.8);
		fx2.addMarker('maiz', 26.1, 2.5);
		fx2.addMarker('uvas', 28.7, 2.2);

		shapeSounds=['cafetera', 'agua', 'tomate', 'trigo',
		'vaca', 'huevos', 'aveja', 'oveja',
		'jugo', 'manzana', 'maiz', 'uvas',];
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

		if(intentos == 5) {
			this.game.global.starsArray[this.game.global.level-1] = 3;
			this.game.global.starsArray[this.game.global.level] = 0;
		}
		else if (intentos >= 7 && intentos <= 9) {
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
		var match = false;
		var notAssign = false;
		var thumbNumber = -1;

		for(var i = 0; i < endSprite.length; i++) {
			for(var j = 0; j < spritesThumb.length; j++) {
				if(endSprite[i] == spritesThumb[j]) {
					thumbNumber = j;
					break;
				}
			}
			if(thumbNumber >= 0) {
				if (!spritesAvailable[thumbNumber]) {
					if (!this.game.physics.arcade.overlap(currentSprite, endSprite[i], function() {
						fx2.play(shapeSounds[currentSprite.frame]);
					 	aciertos++;
					    currentSprite.input.draggable = false;
					    currentSprite.position.copyFrom(endSprite[i].position);
					    currentSprite.anchor.setTo(endSprite[i].anchor.x, endSprite[i].anchor.y); 
					    match = true;
					    spritesAvailable[thumbNumber] = true;
			  		})) { 
						match = false;
					}
				}
				if(match){
					break;
				}
			}
		}
		if(!match){
			currentSprite.position.copyFrom(currentSprite.originalPosition);
		}
	 	if(aciertos == 4) {
	    	this.levelFinished();
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