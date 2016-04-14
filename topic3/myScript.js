var myApp = angular.module('myApp', []);

myApp.controller('MoviesCtrl', ['$scope', function ($scope) {


    $scope.movie = {};

    $scope.movie.details = [{
        "title": "Star Wars",
        "year": "2015",
        "duration": "120",
        "img": "https://lh3.googleusercontent.com/-H1KqX5HicIU/AAAAAAAAAAI/AAAAAAABOuo/ENj4lcl2ekE/s0-c-k-no-ns/photo.jpg",
        
    },{
        "title": "Titanic",
        "year": "1997",
        "duration": "120",
        "img": "http://www.actitudfem.com/media/files/styles/gallerie_carousel/public/images/2015/04/titanicportada_0.jpg?itok=Nak3aC0A",
        
    },{
        "title": "Halloween",
        "year": "1998",
        "duration": "120",
        "img": "http://screenrant.com/wp-content/uploads/Halloween.jpg",
        
    },{
        "title": "Friday 13",
        "year": "1990",
        "duration": "120",
        "img": "http://legionofleia.com/wp-content/uploads/2015/08/friday-the-13th.jpg",
        
    }];

    $scope.deleteMovie = function (index) {
        $scope.movie.details.splice(index, 1)
    };

}]);