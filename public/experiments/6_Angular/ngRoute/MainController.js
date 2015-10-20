(function () {

    angular
    .module("WhiteBoardApp") // [] is not required, else it will throw an error.
    .controller("MainController", MainController);

    function MainController($scope, $location)
    {
        $scope.$location = $location;
    }


})();