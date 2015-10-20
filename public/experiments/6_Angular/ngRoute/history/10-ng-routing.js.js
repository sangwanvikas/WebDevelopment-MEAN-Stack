(function () {


    angular
        .module("WhiteBoardApp", ["ngRoute"])
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
                templateUrl: "course.html"
            })
            .otherwise({
                redirectTo: "/"
            });
        })
})();
