(function() {
  'use strict'

angular.module("Expression", [])
.controller('ExpInt',MSGController);
MSGController.$inject=["$scope"];

function MSGController($scope){
  $scope.name="Kliment";
  $scope.koe="1"
  $scope.sayMessage=function(){
    return "Picture of puppy"
  };

  $scope.puppy2=function(){
    $scope.koe="2";
  }
}
})();
