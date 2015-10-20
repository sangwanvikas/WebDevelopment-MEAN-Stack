(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .controller("RegisterController", RegisterControllerFunction);

    function RegisterControllerFunction($scope, UserService, $rootScope, $location) {



        $scope.register = function (username, password, email) {
            console.log(username + password + email);

            var newUserObject = { username: username, password: password, email: email };
            UserService.createUser(newUserObject);

            if (newUserObject != undefined) {
                var recentlyRegisteredUser = { id: 10, username: username, password: password, firstname: "", lastname: "", email: email };
                $rootScope.loggedInUserObj = recentlyRegisteredUser;
                console.log($rootScope.loggedInUserObj);
                $location.path('/profile');
            }

            console.log(UserService.findAllUsers());
        }
        
    }
})();