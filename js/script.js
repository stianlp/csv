(function () {
    'use strict';



    $(function() {
    //    // Handler for .ready() called.
    //$( "#choir-image" ).animate({
    //    opacity: 0.25,
    //    left: "+=50",
    //    height: "toggle"
    //}, 5000, function() {
    //    // Animation complete.
    //});

    $("#bottom").click(function() {
        console.log("click")
        $('html,body').animate({
                scrollTop: $("#choir-image").prop('scrollHeight')},
            'slow');
    });

    });
}());