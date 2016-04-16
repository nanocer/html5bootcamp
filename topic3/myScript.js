var myApp = angular.module('myApp', []);

myApp.controller('MoviesCtrl', ['$scope', '$http', function ($scope, $http) {
    var id;
    $scope.action="Insert Movie"
    $scope.insert="Insert"
    var mov=this;
    $http.get('http://localhost:3000/movies').success(function(respuesta){
        mov.peliculas = respuesta;
    });

    mov.reset = function(){
        $scope.action="Insert Movie"
        $scope.insert="Insert"
        mov.fdata={}
    }

    mov.fdata={};

    mov.add = function(){

        if($scope.insert=="Insert"){
            $http.post('http://localhost:3000/movies', mov.fdata)
             .success(function(res){
                console.log(res);
                $http.get('http://localhost:3000/movies').success(function(respuesta){
                mov.peliculas = respuesta;
                document.getElementById("movT").value=""                
                document.getElementById("movY").value=""
                document.getElementById("movI").value=""
                document.getElementById("movD").value=""
                });
                
            });
         }
         if($scope.insert=="Edit"){
            $http.put('http://localhost:3000/movies/' + id, mov.fdata)
            .success(function(res){
                console.log(res);
                $http.get('http://localhost:3000/movies').success(function(respuesta){
                mov.peliculas = respuesta;

                });

            });


         }
         mov.fdata={}
         $scope.insert="Insert"
         
    }

    $scope.deleteMovie = function(index){
        id = index
        $http.delete('http://localhost:3000/movies/' + id)
            .success(function(res){
               console.log(res);
                $http.get('http://localhost:3000/movies').success(function(respuesta){
                mov.peliculas = respuesta; 
            });

        });
    }

    $scope.editMovie = function(index){
        var title = $scope.mov.peliculas[index].title
        var year = $scope.mov.peliculas[index].year
        var duration = $scope.mov.peliculas[index].duration
        var img = $scope.mov.peliculas[index].img
        id = $scope.mov.peliculas[index].id
        $scope.insert="Edit"
        $scope.action="Editing "+title
        mov.fdata.title = title
        mov.fdata.year = year
        mov.fdata.duration = duration
        mov.fdata.img = img
    }
    

}]);