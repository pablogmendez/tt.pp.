

var levelSelect_mundodeemociones = function(game){
	console.log("%cStarting my awesome game - level select", "color:white; background:red");
	// how many pages are needed to show all levels?
var pages;
// group where to place all level thumbnails
var levelThumbsGroup;
// current page
var currentPage;
// arrows to navigate through level pages
var leftArrow;
var rightArrow;
}

levelSelect_mundodeemociones.prototype = {
  	create: function(){
  		// how many pages are needed to show all levels?
		// CAUTION!! EACH PAGE SHOULD HAVE THE SAME AMOUNT OF LEVELS, THAT IS
		// THE NUMBER OF LEVELS *MUST* BE DIVISIBLE BY THUMBCOLS*THUMBROWS
  		pages = this.game.global.starsArray.length/(this.game.global.thumbRows*this.game.global.thumbCols);

  		// current page according to last played level, if any
		currentPage = Math.floor(this.game.global.level/(this.game.global.thumbRows*this.game.global.thumbCols));
		if(currentPage>pages-1){
			currentPage = pages-1;
		}

		// left arrow button, to turn one page left
		leftArrow = this.game.add.button(50,420,"level_arrows",this.arrowClicked,this);
		leftArrow.anchor.setTo(0.5);
		leftArrow.frame = 0;

		// can we turn one page left?
		if(currentPage==0){
			leftArrow.alpha = 0.3;
		}
		// right arrow button, to turn one page right
		rightArrow = this.game.add.button(270,420,"level_arrows",this.arrowClicked,this);
		rightArrow.anchor.setTo(0.5);
		rightArrow.frame = 1;
		// can we turn one page right?
		if(currentPage==pages-1){
			rightArrow.alpha = 0.3;
		}
		// creation of the thumbails group
		levelThumbsGroup = this.game.add.group();
		// level determining thumbnails width and height for each page
		var levelLength = this.game.global.thumbWidth*this.game.global.thumbCols+this.game.global.thumbSpacing*(this.game.global.thumbCols-1);
		var levelHeight = this.game.global.thumbWidth*this.game.global.thumbRows+this.game.global.thumbSpacing*(this.game.global.thumbRows-1);

		// looping through each page
		for(var l = 0; l < pages; l++){
			// horizontal offset to have level thumbnails horizontally centered in the page
			var offsetX = (this.game.width-levelLength)/2+this.game.width*l;
			// I am not interested in having level thumbnails vertically centered in the page, but
			// if you are, simple replace my "20" with
			// (game.height-levelHeight)/2
			var offsetY = 20;
			// looping through each level thumbnails
		     for(var i = 0; i < this.game.global.thumbRows; i ++){
		     	for(var j = 0; j < this.game.global.thumbCols; j ++){  
		     		// which level does the thumbnail refer?
					var levelNumber = i*this.game.global.thumbCols+j+l*(this.game.global.thumbRows*this.game.global.thumbCols);
					// adding the thumbnail, as a button which will call thumbClicked function if clicked   		
					var levelThumb = this.game.add.button(offsetX+j*(this.game.global.thumbWidth+this.game.global.thumbSpacing), offsetY+i*(this.game.global.thumbHeight+this.game.global.thumbSpacing), "levels", this.thumbClicked, this);	
					// shwoing proper frame
					levelThumb.frame=this.game.global.starsArray[levelNumber];
					// custom attribute 
					levelThumb.levelNumber = levelNumber+1;
					// adding the level thumb to the group
					levelThumbsGroup.add(levelThumb);
					// if the level is playable, also write level number
					if(this.game.global.starsArray[levelNumber]<4){
						var style = {
							font: "18px Arial",
							fill: "#ffffff"
						};
						var levelText = this.game.add.text(levelThumb.x+5,levelThumb.y+5,levelNumber+1,style);
						levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
						levelThumbsGroup.add(levelText);
					}
				}
			}
		}
		// scrolling thumbnails group according to level position
		levelThumbsGroup.x = currentPage * this.game.width * -1;

	},
	arrowClicked:function(button){
		// touching right arrow and still not reached last page
		if(button.frame==1 && currentPage<pages-1){
			leftArrow.alpha = 1;
			currentPage++;
			// fade out the button if we reached last page
			if(currentPage == pages-1){
				button.alpha = 0.3;
			}
			// scrolling level pages
			var buttonsTween = this.game.add.tween(levelThumbsGroup);
			buttonsTween.to({
				x: currentPage * this.game.width * -1
			}, 500, Phaser.Easing.Cubic.None);

			buttonsTween.start();
		}
		// touching left arrow and still not reached first page
		if(button.frame==0 && currentPage>0){
			rightArrow.alpha = 1;
			currentPage--;
			// fade out the button if we reached first page
			if(currentPage == 0){
				button.alpha = 0.3;
			}
			// scrolling level pages
			var buttonsTween = this.game.add.tween(levelThumbsGroup);
			buttonsTween.to({
				x: currentPage * this.game.width * -1
			}, 400, Phaser.Easing.Cubic.None);
			buttonsTween.start();
		}		
	},
	thumbClicked:function(button){
		// the level is playable, then play the level!!
		if(button.frame < 4){
			if (this.game.global.level >= 0 && this.game.global.level <= 3) {
				this.game.global.level = button.levelNumber;
				this.game.state.start("LevelOne");				
			}
			else if (this.game.global.level >= 4 && this.game.global.level <= 7) {
				this.game.global.level = button.levelNumber;
				this.game.state.start("LevelTwo");				
			}
			else if (this.game.global.level >= 8 && this.game.global.level <= 11) {
				this.game.global.level = button.levelNumber;
				this.game.state.start("LevelThree");				
			}
			else if (this.game.global.level >= 12 && this.game.global.level <= 15) {
				this.game.global.level = button.levelNumber;
				this.game.state.start("LevelFour");				
			}
			else if (this.game.global.level >= 16 && this.game.global.level <= 19) {
				this.game.global.level = button.levelNumber;
				this.game.state.start("LevelFive");				
			}
		}
		// else, let's shake the locked levels
		else{
			var buttonTween = this.game.add.tween(button)
			buttonTween.to({
				alpha: 0.5
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 1
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 0.5
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 1
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.start();
		}
	}
} 