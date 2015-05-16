var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'temps/table.html',
            controller: 'showController'
        })
        .when('/add', {
            templateUrl: 'temps/single.html',
            controller: 'submitController'
        })
        .otherwise({
            redirectTo: '/'
        });
});