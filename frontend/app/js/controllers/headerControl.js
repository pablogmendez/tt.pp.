miAppAngular.controller('HeaderCtrl', function($scope, $location) {
    $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
        var path = $location.path();
        //EDIT: cope with other path
        $scope.templateUrl = (path==='/' || path==='/login' || path==='/registro' || path==='/contacto' || path==='/servicios' || path==='/acercade') ? 'templates/header4login.html' : 'templates/header4dashboard.html' ;
    });
})