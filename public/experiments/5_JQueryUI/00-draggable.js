$(init);

function init() {

    $("#paraId").draggable();

    $("#draggable").draggable({

        axis: "x",
        cursor: "crosshair",
        cursorAt: { left: 5 },
        opacity: 0.35
    });

    $("h3").draggable({
        revert: true,
        html:"will get placed at the place where you picked me from."
    });

};

