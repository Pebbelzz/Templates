
//function for Google Map:
//directions: https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
function initMap(){
	  var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 44.540, lng: -78.546},
          zoom: 6
        });
}