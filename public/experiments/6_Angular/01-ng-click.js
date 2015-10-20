angular
    .module("WhiteBoardApp", [])
    .controller("ngClickController", ngClickController);

function ngClickController($scope) {
    
    $scope.sayHello = function(){
        console.log("sayHello");
        $scope.hello = "Hello World from Angular JS";
    }

    $scope.sayBye = function (str) {
        $scope.saybye = " Good bye " + str;
    }

    $scope.DP = function (str) {
        $scope.dynamicParameter = "say yes to  " +  str;
    }

    $scope.counter = 0;
    $scope.sayCounter = function () {
        $scope.counter = $scope.counter + 1;

        $scope.presentValue = $scope.counter;
    }

  


}