(function () {
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', NameCalculator );

    NameCalculator.$inject = ['$scope'];
    function NameCalculator($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function () {
            $scope.totalValue = calculateNumericForString($scope.name);
        }
        function calculateNumericForString(name) {
            let totalStringValue = 0;
            for (let i = 0; i < name.length; i++) {
                totalStringValue += name.charCodeAt(i);
            }
            return totalStringValue;
        }
    }
})();


//minified version
// !function(){"use strict";function t(t){t.name="",t.totalValue=0,t.displayNumeric=function(){t.totalValue=function t(e){let l=0;for(let o=0;o<e.length;o++)l+=e.charCodeAt(o);return l}(t.name)}}angular.module("NameCalculator",[]).controller("NameCalculatorController",t),t.$inject=["$scope"]}();