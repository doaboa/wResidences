$(document).foundation();

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeightSize = $("html").height() + "px";
    $(".slant").css("height", newHeightSize);

    var leaseNowSpace = ($("html").height() / 3) * 2  + "px";
	$(".text2").css("margin-top", leaseNowSpace);
}


$(document).ready(function($) {
    // $('#web').hover(
    // 	function () {
    // 		$('.text').animate({opacity:'0'});
    //         $("#web").css("width", "68.5%");
    //         $("#webuild").hide();
    //         $("#purpose").hide();

    // 	},
    // 	function () {
    // 		$('.text').animate({opacity:'1'});
    //         $("#web").css("width", "8.5%");
    //         $("#webuild").show();
    //         $("#purpose").show();

    // 	}
    // );

    $('#mobile').hover(
    	function () {
    		$('.text2').animate({opacity:'0'}, {bottom:"+=25"});
            $("#mobile").css("width", "85.5%");
            $("#webuild").hide();
            $("#purpose").hide();

    	},
    	function () {
    		$('.text2').animate({opacity:'1'}, {bottom:"-=25"});
            $("#mobile").css("width", "3.5%");
            $("#webuild").show();
            $("#purpose").show();
    	}
    );

  });
