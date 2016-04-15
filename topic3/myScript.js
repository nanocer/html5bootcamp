var myApp = angular.module('myApp', []);

myApp.controller('MoviesCtrl', ['$scope', '$http', function ($scope, $http) {

    var mov=this;
    $http.get('http://localhost:3000/movies').success(function(respuesta){
        console.log("res:", respuesta);
        mov.peliculas = respuesta;
    });
    

}]);