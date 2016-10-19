var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Butter"];

  $scope.addItem = function() {
    var $obj = $('#itemInput');
    if($scope.addMe == undefined || $scope.addMe == "") {
      $obj.focus();
      return;
    }
    if($scope.products.indexOf($scope.addMe) == -1) {
      $scope.products.push($scope.addMe);
      $scope.addMe = "";
      $obj.focus();
    } else {
      $('#alertMsg').removeClass('out').addClass('in');
      $scope.addMe = "";
      $obj.focus();
      setTimeout(function() {
        $('#alertMsg').removeClass('in').addClass('out');
      }, 3000);
    }
  }

  $scope.removeItem = function(id) {
    $scope.products.splice(id, 1);
  }
  //====================================//
  var init = function() {
    $('#alertMsg').addClass('out');
  };
  init();
});
