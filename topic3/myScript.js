var myApp = angular.module('myApp', []);

myApp.controller('MoviesCtrl', ['$scope', function ($scope) {

    $scope.movie = {};

    $scope.movie.details = [{
        "title": "Star Wars",
        "year": "2015",
        "duration": "120"
    },{
        "title": "Titanic",
        "year": "2015",
        "duration": "120"
    },{
        "title": "Halloween",
        "year": "2015",
        "duration": "120"
    },{
        "title": "Friday 13",
        "year": "2015",
        "duration": "120"
    }];

}]);