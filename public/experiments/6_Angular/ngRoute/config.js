(function () {
    angular
        .module("WhiteBoardApp") // We don't put ["ngRoute"] here because it has been taken care while declaring "WhiteBoardApp" module in MainController.js
        .config(function ($routeProvider) {
            console.log("10-ng-routing.js");
            $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/home", {
                templateUrl: "home.html"
            })
            .when("/login", {
                templateUrl: "login.html"
            })
            .when("/logout", {
                templateUrl: "logout.html"
            })
            .when("/register", {
                templateUrl: "register.html"
            })
            .when("/info", {
                templateUrl: "info.html"
            })
            .when("/course", {
                templateUrl: "course.html",
                controller : "CourseController"
            })
            .when("/courseEdit/:count", {
                templateUrl: "courseEdit.html",
                controller: "CourseEditController"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
})();
