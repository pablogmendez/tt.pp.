var boot_completafrases = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};
  
boot_completafrases.prototype = {

	// init: function(){
	// 	// going fullscreen
	// 	game.scale.pageAlignHorizontally = true;
	// 	game.scale.pageAlignVertically = true;
	// 	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	// 	game.scale.setScreenSize(true);
	// },

	preload: function(){
		  //this.game.stage.backgroundColor = '#afeeee';
          this.game.load.image("loading","games/completafrases/assets/loading.png"); 
          this.game.load.image("loadingText","games/completafrases/assets/loadingtext.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}