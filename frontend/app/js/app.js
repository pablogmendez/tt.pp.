var miAppAngular = angular.module('navegacion', ['ngRoute', 'chart.js'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){

    $routeProvider.when('/' , {      
        templateUrl: "partials/login.html",
        controller: 'loginControl'
    })
    $routeProvider.when('/login' , {      
        templateUrl: "partials/login.html",
        controller: 'loginControl'
    })
    .when('/registro', {
        templateUrl: 'partials/login/registro.html',
        controller: 'registroControl'
    })
    .when('/contacto', {
        templateUrl: 'partials/login/contacto.html',
        controller: 'inicio'
    })
    .when('/servicios', {
        templateUrl: 'partials/login/servicios.html',
        controller: 'inicio'
    })
    .when('/acercade', {
        templateUrl: 'partials/login/acercade.html',
        controller: 'inicio'
    })
    .when('/home', {
        templateUrl: 'partials/dashboard/home.html',
        controller: 'inicio'
    })
    .when('/games', {
        templateUrl: 'partials/dashboard/games.html',
        controller: 'inicio'
    })
    .when('/settings', {
        templateUrl: 'partials/dashboard/settings.html',
        controller: 'configuracionControl'
    })
    .when('/statistics', {
        templateUrl: 'partials/dashboard/estadisticas.html',
        controller: 'LineCtrl'
    })
    .when('/help', {
        templateUrl: 'partials/dashboard/ayuda.html',
        controller: 'inicio'
    })
    .when('/404', {
        templateUrl: 'partials/404.html',
        controller: 'inicio'
    })
    .otherwise({
        redirectTo: '/404'
        
    })
} ] )