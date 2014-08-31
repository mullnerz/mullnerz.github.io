/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Scroll to anchor on new page load
$(document).ready(function(e){  
  //This a page anchor link? 
    if (location.hash) {        
        var str=location.hash; 
        var target=str.replace("_","");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1500, 'easeInOutExpo');

        setTimeout(function() {
            var str=location.href; 
            var target=str.replace("#_","#");
            location.replace(target);
        }, 1500);
    }
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body.index').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Sticky footer width dynamic footer height
var bumpIt = function() {
      $('body').css('margin-bottom', $('footer').height());
    },
    didResize = false;

bumpIt();

$(window).resize(function() {
    didResize = true;
});

setInterval(function() {
    if(didResize) {
        didResize = false;
        bumpIt();
    }
}, 250);