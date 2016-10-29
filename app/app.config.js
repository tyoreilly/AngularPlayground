angular.
  module('dbrsWebApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/index', {
          templateUrl: 'app/home/home.html'
        }).
        otherwise('/index');
    }
  ]);
