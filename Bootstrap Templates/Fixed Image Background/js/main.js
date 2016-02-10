
//function for Google Map:
//directions: https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
function initMap(){
	  var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 6
        });
};


$("document").ready(function(){
	//Scroll to the SecondSection
	$("#linkFromTop, #navFromTop").click(function(){
		$("html, body").animate({
			scrollTop: $("#secondSection").offset().top
		}, 1000);
	});
	//to the About Section
	$("#navToAbout").click(function(){
		$("html, body").animate({
			scrollTop: $("#aboutMe").offset().top
		}, 1500);
	});

	//to the Top/Home Section
	$("#homeFromTop").click(function(){
		$("html, body").animate({
			scrollTop: $("#mainInfo").offset().top
		}, 1500);
	});	

	$(".show-title").mouseenter(function(){
		$(this).css("height", "80px");
		});
	$(".show-title").mouseleave(function(){
		$(this).css("height", "30px");
	});
});
