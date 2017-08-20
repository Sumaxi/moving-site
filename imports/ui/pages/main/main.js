import './main.html';
import '../../components/contact/contact.js';

Template.App_main.onRendered( function() {
    (function($) {
        /*"use strict";
        $("a.page-scroll").bind("click", function(a) {
            var o = $(this);
            $("html, body").stop().animate({
                scrollTop: $(o.attr("href")).offset().top - 50
            }, 1250, "easeInOutExpo"), a.preventDefault()
        }), $("body").scrollspy({
            target: ".navbar-fixed-top",
            offset: 100
        }), $(".navbar-collapse ul li a").click(function() {
            $(".navbar-toggle:visible").click()
        }), $("#mainNav").affix({
            offset: {
                top: 50
            }
        })*/
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 100
        });
        
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 50
            }
        })
        
        $('.carousel').carousel({
            interval: 2000
        })

    })(jQuery); // End of use strict
});

Template.App_main.events({
    'click, a.page-scroll': function(event) {
        
    },
});