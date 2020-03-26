(function() {
  'use strict'

angular.module("Filters", [])
.controller('FiltersCon',FiltersCont);
FiltersCont.$inject=["$scope","$filter"];

function FiltersCont($scope,$filter){
  $scope.name="Kliment";
  $scope.koe="1"
  $scope.cookieCost=.4500;

  $scope.sayMessage=function(){
    var msg="Pictures of puppies";
    var output=$filter('uppercase')(msg);
    return output;
  };

  $scope.puppy2=function(){
    $scope.koe="2";
  }
  $scope.vratiPrvo=function(){
    if($scope.koe="2"){
      $scope.koe="1";
    }
  }
}
})();
