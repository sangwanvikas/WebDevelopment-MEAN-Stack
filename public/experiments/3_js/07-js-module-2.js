(function (myMathApi) {

    function returnSum() {
        var a = document.getElementById("val1").value;
        var b = document.getElementById("val2").value;
        console.log(a);
        console.log(b);
        var c = myMathApi.add(parseInt(a), parseInt(b));
        document.getElementById("final-val").value = c
    }
    
})(myMathApi);