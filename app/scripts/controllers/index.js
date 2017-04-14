$('.carousel').carousel();
$("#menu").click(function() {
	if($(".column-right").css("display") == "none") {
		$(".column-right").show();
		$(".row").css("height","87px")
	} else {
		$(".column-right").hide();
		$(".row").css("height","48px")
	}
}); 
