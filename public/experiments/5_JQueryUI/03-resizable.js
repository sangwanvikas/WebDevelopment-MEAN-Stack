$(init);

function init() {
    $("#divResizable").resizable();

    $("#divResizable2").resizable({
        animate: true,
        animateDuration: "fast",
        ghost: true
    });

};