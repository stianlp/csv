(function () {
    'use strict';

    $(function() {

        $('#click-bottom').click(function() {
            $('html,body').animate({
                scrollTop: $("#choir-image").prop('scrollHeight')},
                {duration: 800}
            );
        });

        $(window).scroll(function() {
            console.log(document.getElementById("page").getBoundingClientRect().top);
            if (window.innerWidth > 767) {
                if (document.getElementById("page").getBoundingClientRect().top <= 0) {
                    $('#second-header').show('slow');
                } else {
                    $('#second-header').hide(300);
                }
            }
        });

        $(window).resize(function() {
            $('#second-header').hide();
        });

    });
}());