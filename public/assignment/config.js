/// <reference path="form/form-fields.view.html" />
(function () {
    "use strict";

    angular
        .module("FormBuilderApp")
        .config(RoutingFunction);

    function RoutingFunction($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home/home.view.html"
            })
            .when("/home", {
                templateUrl: "home/home.view.html"
            })
            .when("/profile", {
                templateUrl: "profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/admin", {
                templateUrl: "admin/admin.view.html"
            })
            .when("/form", {
                templateUrl: "form/form.view.html",
                controller: "FormController"
            })
            .when("/form-fields", {
                templateUrl: "form/form-fields.view.html"
            })
            .when("/register", {
                templateUrl: "register/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "login/login.view.html",
                controller: "LoginController"
            })
            .otherwise({
                redirectTo: "/"
            })
    }
})();