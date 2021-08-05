(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input="";
  $scope.message="Nothing...";
  //LunchCheckController.$inject = ['$scope'];

  function numberOfItems(list){
    if(list==""){
      return 0;
    }
    var arr = list.split(",");
    console.log(arr);
    var a = arr.length;
    return a;
  }
  function message(a){
    if(a==0){// empty
      return "Please enter data first";
    }else if(a<=3){
      return "Enjoy";
    }else{
      return "Too Much!";
    }
  }
  $scope.checkLunch = function(){
    var input = document.getElementById("lunch-menu");

    console.log("checkLunch function running...");
    var a = numberOfItems(input.value);
    $scope.message = message(a);

  };
}
})();
