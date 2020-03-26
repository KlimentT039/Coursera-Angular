(function (){
  'use strict'

angular.module('app', [])
.controller('ctrl',Ctrl)
.filter('custom',customFilter)
.filter('truth', truthFilter);
Ctrl.$inject=["$scope",'customFilter'];

function Ctrl($scope,customFilter){
  $scope.message="Making custom filter in AngularJS";

$scope.change=function(){
  var msg=$scope.message;
  msg=customFilter(msg);
  $scope.message=msg;
}

$scope.sayCustom=function(){
  var msg=$scope.message;
  msg=customFilter(msg);
  return msg;
  }
}



function customFilter(){
  return function (input){
      input=input.replace("custom","fokin")
      return input;
  };
}

function truthFilter(){
  return function (input,target,replace){
    input=input.replace(target,replace);
    return input;
  };
}

})();
