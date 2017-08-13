miAppAngular.controller('gamesControl', function($scope , $location ){
$scope.play = function(juego) {
	if(juego == 'colorama') {
		$location.path("/colorama");
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