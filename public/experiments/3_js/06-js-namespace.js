(function () {
    var array = [12, 23, 34, 45, 56, 67, 78, 5, 90];

    // in JS we will not give int, var etc for the parameter
    function findMinumum(array) {

        var min = array[0];

        for (var i = 0; i < array.length; i++) {
            // console.log is used to print items in the console of the browser.
            console.log(array[i]);

            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }

    var calculatedMinValue = findMinumum(array);
    alert(calculatedMinValue);
})();




