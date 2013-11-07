$(document).ready(function(){
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(41.8929153,-87.6359125),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

function infoWindow(marker, message,url){
            var info = message;
            var infoWindow = new google.maps.InfoWindow({
                content: message + " <a href="+url+"><img src='http://i.picresize.com/images/2013/11/04/LCF60.png'></a>",
            });

            google.maps.event.addListener(marker,'click', function(){
              infoWindow.open(map,marker);
            });
};

function createMarker(lat,lng,name,url){
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat,lng),
    icon: "http://www.locateafoodtruck.com/wp-content/uploads/2013/08/Locate_A_Food_Truck_default-category-icon.png",
    map: map
  })
  infoWindow(marker,name,url)
}



$.get("/all",function(response){
  $.each(response,function(index){
  var lat = response[index].latitude;
  var lng = response[index].longitude;
  var name = response[index].name
  var url = response[index].url
  createMarker(lat,lng,name,url);
})
})
}

google.maps.event.addDomListener(window, 'load', initialize);

});

