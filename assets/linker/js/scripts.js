$(document).ready(function() {

    // upon entering the site, select the correct page
    var hash = window.location.hash.substr(1);
    
    if (hash == '') {
        $('.top').show();
    } else {
        $('.' + hash).show();
    }

    // transitions between pages
    $('.pages > li > a').click(function() {
        var hash = this.hash.substr(1);
        $('.page').hide();
        if (hash == '') {
            $('.top').fadeIn(800);
        } else {
            $('.' + hash).fadeIn(800);
        }
    });


    $("#project-list li").click(function() {
        if ($(this).children().is(':hidden')) {
            $(this).addClass('active');
            $(this).children('.details').slideDown(500);
        } else {
            $(this).removeClass('active');
            $(this).children('.details').slideUp(300);
        }
    });

    $("input[name='alreadyEnded']").click(function() {
        var answer = $( this ).val();
        if (answer == "yes") {
            $(".date-ended").hide()
        } else {
            $(".date-ended").show()
        }
    });
});