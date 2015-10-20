(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .controller("LoginController", LoginControllerFunction);

    function LoginControllerFunction($scope, UserService, $rootScope, $location) {
        var $location = $location;

        $scope.login = function (username, password) {
            console.log(username + " " + password);
            $scope.loggedInUser = UserService.findUserByUsernameAndPassword(username, password);
            

            if ($scope.loggedInUser != undefined) {
                $rootScope.loggedInUserObj = $scope.loggedInUser;
                $location.path('/profile');
            }
            //console.log($scope.loggedInUser);
        }

    }
})();