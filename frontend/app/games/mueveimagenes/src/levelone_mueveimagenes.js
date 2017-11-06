var levelone_mueveimagenes = function(game){
	var leftArrow;
	var errorScreen;
	var fx;
	var sound;
	var intentos;
	var gameThumb1;
}

levelone_mueveimagenes.prototype = {
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

		if(this.game.global.level == 1) {
			gameThumb1 = this.game.add.sprite(0, 50, "hipopotamo");
			this.game.physics.enable(gameThumb1, Phaser.Physics.ARCADE);
	    	gameThumb1.body.velocity.x=50;
	    	gameThumb1.checkWorldBounds = true;
	    	gameThumb1.events.onOutOfBounds.add(this.levelSelect, this);
			this.game.add.button(this.game.width/2 - 120, 320, "boton2", this.levelFailed, this);
			this.game.add.button(this.game.width/2 - 120, 370, "boton1", this.levelFinished, this);
			this.game.add.button(this.game.width/2 + 30, 320, "boton4", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 370, "boton3", this.levelFailed, this);
		}
		else if (this.game.global.level == 2) {
			gameThumb1 = this.game.add.sprite(0, 50, "caballo");
			this.game.physics.enable(gameThumb1, Phaser.Physics.ARCADE);
	    	gameThumb1.body.velocity.x=70;
	    	gameThumb1.checkWorldBounds = true;
	    	gameThumb1.events.onOutOfBounds.add(this.levelSelect, this);
			this.game.add.button(this.game.width/2 - 120, 320, "boton2", this.levelFinished, this);
			this.game.add.button(this.game.width/2 - 120, 370, "boton1", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 320, "boton4", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 370, "boton3", this.levelFailed, this);
		}
		else if (this.game.global.level == 3) {
			gameThumb1 = this.game.add.sprite(0, 50, "cebra");
			this.game.physics.enable(gameThumb1, Phaser.Physics.ARCADE);
	    	gameThumb1.body.velocity.x=90;
	    	gameThumb1.checkWorldBounds = true;
	    	gameThumb1.events.onOutOfBounds.add(this.levelSelect, this);
			this.game.add.button(this.game.width/2 - 120, 320, "boton2", this.levelFailed, this);
			this.game.add.button(this.game.width/2 - 120, 370, "boton1", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 320, "boton4", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 370, "boton3", this.levelFinished, this);
		}
		else if (this.game.global.level == 4) {
			gameThumb1 = this.game.add.sprite(0, 50, "hormiga");
			this.game.physics.enable(gameThumb1, Phaser.Physics.ARCADE);
	    	gameThumb1.body.velocity.x=110;
	    	gameThumb1.checkWorldBounds = true;
	    	gameThumb1.events.onOutOfBounds.add(this.levelSelect, this);
			this.game.add.button(this.game.width/2 - 120, 320, "boton2", this.levelFailed, this);
			this.game.add.button(this.game.width/2 - 120, 370, "boton1", this.levelFailed, this);
			this.game.add.button(this.game.width/2 + 30, 320, "boton4", this.levelFinished, this);
			this.game.add.button(this.game.width/2 + 30, 370, "boton3", this.levelFailed, this);
		}

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
		gameThumb1.body.velocity.x=0;
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
    	gameThumb1.body.velocity.x=50;
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