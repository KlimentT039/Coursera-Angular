(function (){
  'use strict'

angular.module("DigestA", [])

.controller("DigestControl",DigestCycle);

DigestCycle.$inject=["$scope"];

function DigestCycle($scope) {

  $scope.onceCounter = 0;
  $scope.counter=0;
  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers",$scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter=function () {
    $scope.counter++;
  }

  $scope.$watch(function () {
    console.log("Digest Loop Fired!")
  })

  $scope.name="Kliment"
  /*$scope.$watch('onceCounter', function(newValue,oldValue){
    console.log("old value:",oldValue);
    console.log("new value:",newValue);
  });
  $scope.$watch('counter', function(newV,oldV){
    console.log("old :",oldV);
    console.log("new :",newV);
  });
*/

}

})()
