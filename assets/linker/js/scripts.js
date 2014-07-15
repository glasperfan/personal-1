$(document).ready(function() {

	// landing page animation
    var title = document.getElementById("title");
	var caption = document.getElementById("caption");
    if (title && caption) {
    	TweenLite.from(title, 1.5, {marginLeft:"50px"});
    	TweenLite.from(caption, 1.5, {marginLeft:"900px"});
    }

    $("#page-arrow").delay(1500).animate({opacity: 1}, 1000);

    $("a").click(function() {
    	$(".details").fadeIn(1000);
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