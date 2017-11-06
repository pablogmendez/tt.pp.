var gameOver_colorama = function(game){}

gameOver_colorama.prototype = {
	init: function(score){
	},
  	create: function(){
  		var style = {
			font: "25px Arial",
			fill: "#ffffff"
		};
		var style2 = {
			font: "16px Arial",
			fill: "#ffffff"
		};

		this.game.global.stats.status = "finished";
		this.game.global.stats.winLevels++;
		this.game.add.text(10,10,"Colorama terminado!!!",style);
		this.game.add.text(10,50,"Estadisticas",style2);
		this.game.add.text(10,60,"------------------",style2);
		this.game.add.text(10,80,"Puntaje: " + this.game.global.stats.score,style2);
		this.game.add.text(10,100,"Niveles ganados: " + this.game.global.stats.winLevels,style2);
		this.game.add.text(10,120,"Niveles perdidos: " + this.game.global.stats.loseLevels,style2);
		this.game.add.text(10,140,"Niveles abandonados: " + this.game.global.stats.abandonLevels,style2);
		this.game.add.text(10,160,"Tiempo total jugado: " + this.game.global.stats.time + " segundos",style2);
		this.game.add.text(10,180,"Estrellas totales: " + this.game.global.stats.stars,style2);
		this.game.add.text(10,200,"Fecha de juego: " + this.game.global.stats.timestamp,style2);
		this.game.add.text(10,220,"Estado del juego: " + this.game.global.stats.status,style2);

		this.game.add.text(10,280,"Presione el boton \"Volver\" para regresar",style2);
		this.game.add.text(10,300,"al menu de juegos ...",style2);
		console.log(this.game.global.stats);
	}
}