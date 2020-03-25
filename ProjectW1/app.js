(function(){
'use strict'

angular.module('Project1', [])

.controller('ProjectControl',MSGCheck);

MSGCheck.$inject=["$scope"];

function MSGCheck($scope){
  $scope.dishes="";
  $scope.message="";
  $scope.CheckLunch=function(){
    var dish=$scope.dishes;
    if(dish==="")
      $scope.message="Please enter data first";
    else{
      var array=dish.split(",");

      if(array.length>3)
        $scope.message="Too Much";
      else {
        $scope.message="Enjoy";
      }
    }

  }
}


})();
