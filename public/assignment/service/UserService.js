(function () {
    "use strict";

    angular
    .module("FormBuilderApp")
    .factory("UserService", UserServiceFunction);

    function UserServiceFunction() {
        var currentUsers = [
        { id: 1, username: "username1", firstname: "firstname1", lastname: "lastname2", password: "password1", email: "email1@gmail.com" },
        { id: 2, username: "username2", firstname: "firstname2", lastname: "lastname3", password: "password2", email: "email2@gmail.com" },
        { id: 3, username: "username3", firstname: "firstname3", lastname: "lastname3", password: "password3", email: "email3@gmail.com" },
        { id: 10, username: "username10", firstname: "firstname10", lastname: "lastname10", password: "password10", email: "email10@gmail.com" }
        ];

        var service = {
            findUserByUsernameAndPassword: FindUserByUsernameAndPasswordFunction,
            findAllUsers: FindAllUsersFunction,
            createUser: CreateUserFunction,
            deleteUserById: DeleteUserByIdFunction,
            updateUser: UpdateUserFunction
        };
        return service;

        // FindUserByUsernameAndPasswordFunction : username, password,  callback function
        // Accepts parameters username, password, and callback function
        // Iterates over the array of current users looking for user object whose username and password match the parameters
        // Calls back with user found or null otherwise
        function FindUserByUsernameAndPasswordFunction(username, password, callback) {
            var loggedInUser;
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i].username == username && currentUsers[i].password == password)
                    loggedInUser = currentUsers[i];
                break
            };
            return loggedInUser
        }

        // Accepts parameter callback function
        // Calls back with array of all users
        function FindAllUsersFunction(callback) {
            return currentUsers;
        }

        // Accepts parameters user object and callback function
        // Adds property called id with unique guid
        // Adds new user to local array of users
        // Calls back with new user
        function CreateUserFunction(userObj, callback) {
            var uniqueId = guid();
            userObj.id = uniqueId;
            currentUsers.push(userObj);
        }

        function guid() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }

        //Accepts parameters user id and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, removes user from the array of current users
        //Calls back with remaining array of all users
        function DeleteUserByIdFunction(id, callback) {
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i].username == username && currentUsers[i].password == password)
                    currentUsers.remove(currentUsers[i]);
            };
        }

        //Accepts parameters user id, user object and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, updates user with new user properties
        //Calls back with update user
        function UpdateUserFunction(id, userObj, callback) {
            for (var i = 0; i < currentUsers.length; i++) {
                if (currentUsers[i].id == id) {
                    currentUsers[i].username = userObj.username;
                    currentUsers[i].firstname = userObj.firstname;
                    currentUsers[i].lastname = userObj.lastname;
                    currentUsers[i].password = userObj.password;
                    currentUsers[i].email = userObj.email;
                }
            }
        }
    }

})();