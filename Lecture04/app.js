(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Kliment";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
