miAppAngular.controller('gamesControl', function($scope , $location ){
$scope.play = function(juego) {
	if(juego == 'colorama') {
		$location.path("/colorama");
	}
	else if(juego == 'asociaformas') {
		$location.path("/asociaformas");
	}
	else if(juego == 'completafrases') {
		$location.path("/completafrases");
	}
	else if(juego == 'idobjetos') {
		$location.path("/idobjetos");
	}
	else if(juego == 'mueveimagenes') {
		$location.path("/mueveimagenes");
	}
	else if(juego == 'mundodeemociones') {
		$location.path("/mundodeemociones");
	}
}
/*
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, render: render });

var circle;

function create() {

    circle = new Phaser.Circle(game.world.centerX, 100,64);

}
$location.path("/registro")
function render () {

    game.debug.geom(circle,'#cfffff');
    game.debug.text('Diameter : '+circle.diameter,50,200);
    game.debug.text('Circumference : '+circle.circumference(),50,230);

}*/
//$scope.aasd = "HOLA";
});