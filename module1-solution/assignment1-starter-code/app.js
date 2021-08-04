(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {

  $scope.input="";    //finish
  $scope.message="Nothing to display.";

  //LunchCheckController.$inject = ['$scope'];
  $scope.checkLunch = function(){
    var input = document.getElementById("lunch-menu");

    function numberOfItems(list){
      var items = list.split(",");
      console.log("Items:");
      console.log(items);
      return items.length;
    }
    function isEnough(number){
      if(number<=3){
        return true;
      }else{
        return false;
      }
    }
    function message(answer){
      if(answer){
        return "Enjoy!"
      }else{
        return "Too Much!"
      }
    }

    console.log("checkLunch function running...")

    var a = numberOfItems(input.value);
    var b = isEnough(a);
    $scope.message = message(b);
  }

});


})();
