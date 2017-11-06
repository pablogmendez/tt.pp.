var levelfour_colorama = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
	var aciertos;
	var spritesAvailable;
	var spritesThumb;
}

levelfour_colorama.prototype = {
  	create: function(){
  		intentos = 0;
  		aciertos = 0;
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
		for(var i = 0; i < 6; ++i) {
			shapesToShow.push(Math.floor((Math.random() * 20) + 0));
		}

		var position = 90;
		var index = 0;

		//var shapesToShowShuffle = shapesToShow.slice();
		var posX = [50, this.game.width/2, this.game.width-50, 50, this.game.width/2, this.game.width-50];
		var posY = [position, position, position, position + 90, position + 90, position + 90];
		var coord = [0, 1, 2, 3, 4, 5];
		//coord = shuffle(coord);
			
		var gameThumb = this.game.add.sprite(posX[coord[0]], posY[coord[0]], "formas_blanco");
		var gameThumb2 = this.game.add.sprite(posX[coord[1]], posY[coord[1]], "formas_blanco");
		var gameThumb4 = this.game.add.sprite(posX[coord[2]], posY[coord[2]], "formas_blanco");
		var gameThumb6 = this.game.add.sprite(posX[coord[3]], posY[coord[3]], "formas_blanco");
		var gameThumb8 = this.game.add.sprite(posX[coord[4]], posY[coord[4]], "formas_blanco");
		var gameThumb10 = this.game.add.sprite(posX[coord[5]], posY[coord[5]], "formas_blanco");

		spritesAvailable = [false, false, false, false, false, false];		
		spritesThumb = [gameThumb, gameThumb2, gameThumb4, gameThumb6, gameThumb8, gameThumb10];

		gameThumb.anchor.setTo(0.5);
		gameThumb.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb);
		var gameThumb1 = this.game.add.sprite(50, position + 180, "formas");
		gameThumb1.anchor.setTo(0.5);
		gameThumb1.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb1);
		gameThumb1.inputEnabled = true;
	    gameThumb1.input.enableDrag();
	    gameThumb1.originalPosition = gameThumb1.position.clone();


		index++;  	

		
		gameThumb2.anchor.setTo(0.5);
		gameThumb2.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb2);
		var gameThumb3 = this.game.add.sprite(this.game.width/2, position + 180, "formas");
		gameThumb3.anchor.setTo(0.5);
		gameThumb3.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb3);
		gameThumb3.inputEnabled = true;
	    gameThumb3.input.enableDrag();
	    gameThumb3.originalPosition = gameThumb3.position.clone();


		index++;

		
		gameThumb4.anchor.setTo(0.5);
		gameThumb4.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb4);
		var gameThumb5 = this.game.add.sprite(this.game.width-50, position + 180, "formas");
		gameThumb5.anchor.setTo(0.5);
		gameThumb5.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb5);
		gameThumb5.inputEnabled = true;
	    gameThumb5.input.enableDrag();
	    gameThumb5.originalPosition = gameThumb5.position.clone();

		index++;

		position = position + 90;



		gameThumb6.anchor.setTo(0.5);
		gameThumb6.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb6);
		var gameThumb7 = this.game.add.sprite(50, position + 180, "formas");
		gameThumb7.anchor.setTo(0.5);
		gameThumb7.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb7);
		gameThumb7.inputEnabled = true;
	    gameThumb7.input.enableDrag();
	    gameThumb7.originalPosition = gameThumb7.position.clone();

		index++;  	


		gameThumb8.anchor.setTo(0.5);
		gameThumb8.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb8);
		var gameThumb9 = this.game.add.sprite(this.game.width/2, position + 180, "formas");
		gameThumb9.anchor.setTo(0.5);
		gameThumb9.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb9);
		gameThumb9.inputEnabled = true;
	    gameThumb9.input.enableDrag();
	    gameThumb9.originalPosition = gameThumb9.position.clone();

		index++;


		gameThumb10.anchor.setTo(0.5);
		gameThumb10.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb10);
		var gameThumb11 = this.game.add.sprite(this.game.width-50, position + 180, "formas");
		gameThumb11.anchor.setTo(0.5);
		gameThumb11.frame = shapesToShow[index];
		this.game.physics.arcade.enable(gameThumb11);
		gameThumb11.inputEnabled = true;
	    gameThumb11.input.enableDrag();
	    gameThumb11.originalPosition = gameThumb11.position.clone();



		var i = 0;
		var vector1=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
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
					case 4:
						vector1.push(gameThumb8);
						break;
					case 5:
						vector1.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
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
					case 4:
						vector1.push(gameThumb8);
						break;
					case 5:
						vector1.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
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
					case 4:
						vector1.push(gameThumb8);
						break;
					case 5:
						vector1.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
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
					case 4:
						vector1.push(gameThumb8);
						break;
					case 5:
						vector1.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
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
					case 4:
						vector1.push(gameThumb8);
						break;
					case 5:
						vector1.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb1.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector1);
		}, this);

		// -------------------------------------------------------------------

		i++;
		var vector2=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
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
					case 4:
						vector2.push(gameThumb8);
						break;
					case 5:
						vector2.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
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
					case 4:
						vector2.push(gameThumb8);
						break;
					case 5:
						vector2.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
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
					case 4:
						vector2.push(gameThumb8);
						break;
					case 5:
						vector2.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
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
					case 4:
						vector2.push(gameThumb8);
						break;
					case 5:
						vector2.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
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
					case 4:
						vector2.push(gameThumb8);
						break;
					case 5:
						vector2.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb3.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector2);
		}, this);

		// --------------------------------------------------------------

		i++;
		var vector3=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
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
					case 4:
						vector3.push(gameThumb8);
						break;
					case 5:
						vector3.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
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
					case 4:
						vector3.push(gameThumb8);
						break;
					case 5:
						vector3.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
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
					case 4:
						vector3.push(gameThumb8);
						break;
					case 5:
						vector3.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
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
					case 4:
						vector3.push(gameThumb8);
						break;
					case 5:
						vector3.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
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
					case 4:
						vector3.push(gameThumb8);
						break;
					case 5:
						vector3.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb5.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector3);
		}, this);

		// --------------------------------------------------------------


		i++;
		var vector4=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
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
					case 4:
						vector4.push(gameThumb8);
						break;
					case 5:
						vector4.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
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
					case 4:
						vector4.push(gameThumb8);
						break;
					case 5:
						vector4.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
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
					case 4:
						vector4.push(gameThumb8);
						break;
					case 5:
						vector4.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
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
					case 4:
						vector4.push(gameThumb8);
						break;
					case 5:
						vector4.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
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
					case 4:
						vector4.push(gameThumb8);
						break;
					case 5:
						vector4.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb7.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector4);
		}, this);

		// --------------------------------------------------------------

		i++;
		var vector5=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
				switch(j) {
					case 0:
						vector5.push(gameThumb);
						break;
					case 1:
						vector5.push(gameThumb2);
						break;
					case 2:
						vector5.push(gameThumb4);
						break;
					case 3:
						vector5.push(gameThumb6);
						break;
					case 4:
						vector5.push(gameThumb8);
						break;
					case 5:
						vector5.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
				switch(j) {
					case 0:
						vector5.push(gameThumb);
						break;
					case 1:
						vector5.push(gameThumb2);
						break;
					case 2:
						vector5.push(gameThumb4);
						break;
					case 3:
						vector5.push(gameThumb6);
						break;
					case 4:
						vector5.push(gameThumb8);
						break;
					case 5:
						vector5.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
				switch(j) {
					case 0:
						vector5.push(gameThumb);
						break;
					case 1:
						vector5.push(gameThumb2);
						break;
					case 2:
						vector5.push(gameThumb4);
						break;
					case 3:
						vector5.push(gameThumb6);
						break;
					case 4:
						vector5.push(gameThumb8);
						break;
					case 5:
						vector5.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
				switch(j) {
					case 0:
						vector5.push(gameThumb);
						break;
					case 1:
						vector5.push(gameThumb2);
						break;
					case 2:
						vector5.push(gameThumb4);
						break;
					case 3:
						vector5.push(gameThumb6);
						break;
					case 4:
						vector5.push(gameThumb8);
						break;
					case 5:
						vector5.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
				switch(j) {
					case 0:
						vector5.push(gameThumb);
						break;
					case 1:
						vector5.push(gameThumb2);
						break;
					case 2:
						vector5.push(gameThumb4);
						break;
					case 3:
						vector5.push(gameThumb6);
						break;
					case 4:
						vector5.push(gameThumb8);
						break;
					case 5:
						vector5.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb9.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector5);
		}, this);

		// --------------------------------------------------------------

				i++;
		var vector6=[];
		for(var j = 0; j < shapesToShow.length; j++) {
			if((shapesToShow[i] >= 0 && shapesToShow[i] <= 3) && (shapesToShow[j] >= 0 && shapesToShow[j] <= 3)) {
				switch(j) {
					case 0:
						vector6.push(gameThumb);
						break;
					case 1:
						vector6.push(gameThumb2);
						break;
					case 2:
						vector6.push(gameThumb4);
						break;
					case 3:
						vector6.push(gameThumb6);
						break;
					case 4:
						vector6.push(gameThumb8);
						break;
					case 5:
						vector6.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 4 && shapesToShow[i] <= 7) && (shapesToShow[j] >= 4 && shapesToShow[j] <= 7)) {
				switch(j) {
					case 0:
						vector6.push(gameThumb);
						break;
					case 1:
						vector6.push(gameThumb2);
						break;
					case 2:
						vector6.push(gameThumb4);
						break;
					case 3:
						vector6.push(gameThumb6);
						break;
					case 4:
						vector6.push(gameThumb8);
						break;
					case 5:
						vector6.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 8 && shapesToShow[i] <= 11) && (shapesToShow[j] >= 8 && shapesToShow[j] <= 11)) {
				switch(j) {
					case 0:
						vector6.push(gameThumb);
						break;
					case 1:
						vector6.push(gameThumb2);
						break;
					case 2:
						vector6.push(gameThumb4);
						break;
					case 3:
						vector6.push(gameThumb6);
						break;
					case 4:
						vector6.push(gameThumb8);
						break;
					case 5:
						vector6.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 12 && shapesToShow[i] <= 15) && (shapesToShow[j] >= 12 && shapesToShow[j] <= 15)) {
				switch(j) {
					case 0:
						vector6.push(gameThumb);
						break;
					case 1:
						vector6.push(gameThumb2);
						break;
					case 2:
						vector6.push(gameThumb4);
						break;
					case 3:
						vector6.push(gameThumb6);
						break;
					case 4:
						vector6.push(gameThumb8);
						break;
					case 5:
						vector6.push(gameThumb10);
						break;
				}
			}
			else if((shapesToShow[i] >= 16 && shapesToShow[i] <= 19) && (shapesToShow[j] >= 16 && shapesToShow[j] <= 19)) {
				switch(j) {
					case 0:
						vector6.push(gameThumb);
						break;
					case 1:
						vector6.push(gameThumb2);
						break;
					case 2:
						vector6.push(gameThumb4);
						break;
					case 3:
						vector6.push(gameThumb6);
						break;
					case 4:
						vector6.push(gameThumb8);
						break;
					case 5:
						vector6.push(gameThumb10);
						break;
				}
			}
		}

		gameThumb11.events.onDragStop.add(function(currentSprite){
  			this.stopDrag1(currentSprite, vector6);
		}, this);

		// --------------------------------------------------------------

		//	Here we set-up our audio sprite
		fx = this.game.add.audio('pedidosformasycolores');
    	fx.allowMultiple = true;

		fx.addMarker('consigna', 0, 3.0);

		fx.play('consigna');
	},

	levelSelect: function(button) {
		this.game.global.abandon = true;
		this.game.state.start("LevelSelect");
	},

	levelFinished: function(){
		var muyBien = this.game.add.audio('muybien');
    	muyBien.allowMultiple = true;
    	muyBien.play();

		this.game.global.score += 50;	
		intentos++;

		if(intentos == 6) {
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

	stopDrag: function(currentSprite, endSprite){
		intentos++;
		 if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
		 	aciertos++;
		    currentSprite.input.draggable = false;
		    currentSprite.position.copyFrom(endSprite.position); 
		    currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
  		})) { currentSprite.position.copyFrom(currentSprite.originalPosition);}
		 	if(aciertos == 6) {
		    	this.levelFinished();
		    }
  	},

  	stopDrag1: function(currentSprite, endSprite){
		intentos++;
		var match = false;
		var notAssign = false;
		var thumbNumber = 0;

		for(var i = 0; i < endSprite.length; i++) {
			for(var j = 0; j < spritesThumb.length; j++) {
				if(endSprite[i] == spritesThumb[j]) {
					thumbNumber = j;
					break;
				}
			}
			if (!spritesAvailable[thumbNumber]) {
				if (!this.game.physics.arcade.overlap(currentSprite, endSprite[i], function() {
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
		if(!match){
			currentSprite.position.copyFrom(currentSprite.originalPosition);
		}
	 	if(aciertos == 6) {
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