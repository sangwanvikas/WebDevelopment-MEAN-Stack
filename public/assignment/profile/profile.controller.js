(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileControllerFunction);

    function ProfileControllerFunction($scope, UserService, $rootScope) {
        // load logged in user's information
        console.log($rootScope.loggedInUserObj);
        $scope.usernameModel = $rootScope.loggedInUserObj.username;
        $scope.firstNameModel = $rootScope.loggedInUserObj.firstname;
        $scope.lastNameModel = $rootScope.loggedInUserObj.lastname;
        $scope.passwordModel = $rootScope.loggedInUserObj.password;
        $scope.emailModel = $rootScope.loggedInUserObj.email;

        $scope.update = function (username, password, firstname, lastname, email) {
            console.log(username, password, firstname, lastname, email);
            var userObjToBeUpdated = { id: 10, username: username, password: password, firstname: firstname, lastname: lastname, email: email }
            // replace it with the logged in user id
            var currentUsrLoggedInId = 10;
            UserService.updateUser(currentUsrLoggedInId, userObjToBeUpdated);
            
            console.log(UserService.findAllUsers());
        }
    }

})();