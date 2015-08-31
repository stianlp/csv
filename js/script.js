(function () {
    'use strict';

    $(function() {

        $('#click-bottom').click(function() {
            $('html,body').animate({
                    scrollTop: $("#choir-image").prop('scrollHeight')},
                {
                    duration: 1000,
                    complete: function () {
                        console.log('hey');
                        //$('#header').addClass('bg');
                    }
                }
            );
        });

        $(window).scroll(function() {
            console.log(document.getElementById("page").getBoundingClientRect().top);
            if (document.getElementById("page").getBoundingClientRect().top <= 0) {
                $('#second-header').show('slow');
            } else {
                $('#second-header').hide(500);
            }
        });

    });
}());