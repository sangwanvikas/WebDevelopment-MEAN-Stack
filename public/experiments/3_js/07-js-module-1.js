var myMathApi = (function () {

    var api = {
        add: addMethod,
        sub: subMethod
    };

    return api;

    function addMethod(a, b)
    {
        return a + b;
    }

    function subMethod(a, b) {
        return a - b;
    }

})();