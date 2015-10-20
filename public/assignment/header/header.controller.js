(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .controller("HeaderController", HeaderControllerFunction);

    function HeaderControllerFunction($scope, $location) {
        $scope.$location = $location;
    }

})();