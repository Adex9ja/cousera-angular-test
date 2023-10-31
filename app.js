(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckDI );

    LunchCheckDI.$inject = ['$scope'];
    function LunchCheckDI($scope) {
       $scope.lunchItems = "";
       $scope.checkLunch = function () {
              let lunchItems = $scope.lunchItems;
              if (lunchItems === "") {
                $scope.message = "Please enter data first";
              } else {
                let split = lunchItems.split(",");
                let filteredSplit = split.filter((item) => item.trim() !== "");
                if (filteredSplit.length <= 3) {
                     $scope.message = "Enjoy!";
                } else {
                     $scope.message = "Too much!";
                }
              }
       };
    }
})();