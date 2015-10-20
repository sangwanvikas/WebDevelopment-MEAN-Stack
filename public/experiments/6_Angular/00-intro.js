var app = angular.module("WhiteBoardApp", []);
app.controller("div1WhiteBoardController", pController);

function pController($scope) {
    console.log("from angular js");
    $scope.hello = "Hello World from Angular JS";
}

