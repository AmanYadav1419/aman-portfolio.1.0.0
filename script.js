$(document).ready(function () {
    $(window).scroll(function () {
        //Checks that if window is sscrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });

});

$(document).ready(function () {
    //Add smooth scrolling to all links
    $("a").on('click', function (event) {

        //Make sure this hash a value before overriding defult behaviour
        if (this.hash !== "") {
            // prevent default anchor click behaviour
            event.preventDefault();

            //Store the hash
            var hash = this.hash;

            //Using jQery's animate() method to add smooth page scroll
            //The optional number (800) specifies the number of miliseconds it take to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behaviour)
                window.location.hash = hash;
            });
        } // End if
    });
});