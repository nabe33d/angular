var myApp = angular.module('myapp', []);
myApp.controller('MainController', ['$scope', function ($scope) {
  $scope.users = [
    { "name": "taguchi", "score": 52.22 },
    { "name": "tanaka", "score": 38.22 },
    { "name": "yamada", "score": 11.11 }
  ];
  $scope.today = new Date();
}]);

myApp.controller('userItemCtrl', ['$scope', function ($scope) {
  $scope.increment = function () {
    $scope.user.score++;
  }
  $scope.decrement = function () {
    $scope.user.score--;
  }
}]);

myApp.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.addUser = function () {

  }
}]);
