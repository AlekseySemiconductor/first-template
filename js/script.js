;$(document).ready(function(){

	var all = "#blog img";
	var graphic = "#blog .graphic";
	var illustration = "#blog .illustration";
	var motion = "#blog .motion";
	
	$(function(){
		$("#all").on("click", function(){
			$(all).hide();
			$(all).fadeIn();
		});
		$("#graphic").on("click", function(){
			$(all).show();
			$(graphic).siblings("#blog .illustration, #blog .motion").hide();
		});
		$("#illustration").on("click", function(){
			$(all).show();
			$(illustration).siblings("#blog .graphic, #blog .motion").hide();
		});
		$("#motion").on("click", function(){
			$(all).show();
			$(motion).siblings("#blog .graphic, #blog .illustration").hide();
		});
	});

});
