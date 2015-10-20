(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .controller("SidebarController", SidebarControllerFunction);

    function SidebarControllerFunction($scope, $location) {
        $scope.$location = $location;
    }

})();