$(document).ready(function() {

    $('h3').click(function() {
        $(this).css('background', 'pink');
    })

    /*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/


    /*animate on scroll*/
    $('.jswp1').waypoint(function(direction) {
        $('.jswp1').addClass('animated rubberBand');
    }, {
        offset: '15%'
    });
    $('.jswp2').waypoint(function(direction) {
        $('.jswp2').addClass('animated wobble');
    }, {
        offset: '10%'
    });
    $('.jswp3').waypoint(function(direction) {
        $('.jswp3').addClass('animated pulse');
    }, {
        offset: '10%'
    });
    $('.jswp4').waypoint(function(direction) {
        $('.jswp4').addClass('animated fadeout');
    }, {
        offset: '100%'
    });


    $('.jsnavicon').click(function() {
        var nav = $('.jsmainnav');
        var icon = $('.jsnavicon i');

        nav.slideToggle(200)
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }



    });


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});


//Infinite Scroll
$(window).on("scroll", function() {
    //page height
    var scrollHeight = $(document).height();
    //scroll position
    var scrollPos = $(window).height() + $(window).scrollTop();
    // fire if the scroll position is 300 pixels above the bottom of the page
    if (((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {
        $('.load-more-days-button').click();
    }
});