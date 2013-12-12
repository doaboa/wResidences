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

    $(".all").hide();
    $("#slide1").show();
    $("#arrow").click(function() {
        $("#slide1").hide();
        $("#slide2").show();
        $("#arrow").click(function() {
            $("#slide2").hide();
            $("#slide3").show();
            $("#arrow").click(function() {
                $("#slide3").hide();
                $("#slide4").show();
                $("#arrow").click(function() {
                    $("#slide4").hide();
                    $("#slide5").show();
                    $("#arrow").click(function() {
                        $("#slide5").hide();
                        $("#slide6").show();
                        $("#arrow").click(function() {
                            $("#slide6").hide();
                            $("#slide7").show();
                            $("#arrow").click(function() {
                                $("#slide7").hide();
                                $("#slide8").show();
                                $("#arrow").click(function() {
                                    $("#slide8").hide();
                                    $('.text2').animate({opacity:'0'});
                                    $("#mobile").css("width", "85.5%");
                                    $("#webuild").hide();
                                    $("#finaltext").show();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    $('#mobile').hover(
    	function () {
    		$('.text2').animate({opacity:'0'});
            $("#mobile").css("width", "85.5%");
            $("#webuild").hide();

    	},
    	function () {
    		$('.text2').animate({opacity:'1'}, {bottom:"-=25"});
            $("#mobile").css("width", "3.5%");
            $("#webuild").show();
    	}
    );

  });
