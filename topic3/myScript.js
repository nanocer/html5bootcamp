var myApp = angular.module('myApp', []);

myApp.controller('MoviesCtrl', ['$scope', '$http', function ($scope, $http) {

    var mov=this;
    $http.get('http://localhost:3000/movies').success(function(respuesta){
        mov.peliculas = respuesta;
    });

    mov.fdata={};

    mov.enviar = function(){
        $http.post('http://localhost:3000/movies', mov.fdata)
         .success(function(res){
            console.log(res);
            $http.get('http://localhost:3000/movies').success(function(respuesta){
            mov.peliculas = respuesta;
            });
            
        });
    }

    $scope.deleteMovie = function(index){
        console.log($scope.mov.peliculas[index].id)
        $http.delete('http://localhost:3000/movies/' + $scope.mov.peliculas[index].id)
            .success(function(res){
               console.log(res);
                $http.get('http://localhost:3000/movies').success(function(respuesta){
                mov.peliculas = respuesta; 
            });

        });
    }
    

}]);