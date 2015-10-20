(function () {
    "use strict";

    angular
        .module("FormBuilderApp", ["ngRoute"])
        .run(runMethod);

    function runMethod($rootScope) {
        $rootScope.loggedInUserObj = {};
    };
})();