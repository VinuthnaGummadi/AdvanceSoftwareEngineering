angular.module('starter')

.controller('MapController', [ '$scope', '$state', '$ionicLoading', 'GoogleMaps', 'Foursquare', 'Settings', 
	function ($scope, $state, $ionicLoading, GoogleMaps, Foursquare, Settings) {
	
	$scope.GoogleMaps = GoogleMaps;
	
	var apiKey = false;
	var map = null;
	var lat = 0;
	var lng = 0;
	var directionDisplay;
	var directionsService = new google.maps.DirectionsService();

	//GoogleMaps.init();

	$scope.chooseLocation = function() {
		$ionicLoading.show({
			template: '<p class="item-icon-left">Pinpointing..<ion-spinner class="spinner-energized" icon="lines"/></p>'
		});
		directionsDisplay = new google.maps.DirectionsRenderer();
			var latLng = new google.maps.LatLng(lat, lng);
			var mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			map = new google.maps.Map(document.getElementById("map"), mapOptions);
			directionsDisplay.setMap(map);
			
			calcRoute(myLat, myLng, venueLat, venueLng);
			
			Foursquare.whereAt(myLat, myLng, Settings.query, Settings.price, function(data) {
				var numVenues = data['response']['groups'][0]['items'].length;
				var num = Math.floor((Math.random() * numVenues));
				console.log(num);
				console.log(data['response']['groups'][0]['items']);

				var venueLat = data['response']['groups'][0]['items'][num]['venue']['location']['lat'];
				var venueLng = data['response']['groups'][0]['items'][num]['venue']['location']['lng'];
				$scope.venueName = data['response']['groups'][0]['items'][num]['venue']['name'];
				$scope.venuePrice = data['response']['groups'][0]['items'][num]['venue']['price']['message'];
				$scope.venueRating = data['response']['groups'][0]['items'][num]['venue']['rating'] + "/10";
				$scope.venueContact = data['response']['groups'][0]['items'][num]['venue']['contact']['formattedPhone'];
				$scope.venueCategory = data['response']['groups'][0]['items'][num]['venue']['categories'][0]['shortName'];
				$scope.venueTip = "\"" + data['response']['groups'][0]['items'][num]['tips'][0]['text'] + "\"";
				$scope.venueUrl = data['response']['groups'][0]['items'][num]['venue']['url'];
				$scope.venueAddress = data['response']['groups'][0]['items'][num]['venue']['location']['address'] + " " + 
										data['response']['groups'][0]['items'][num]['venue']['location']['city'] + " " + 
										data['response']['groups'][0]['items'][num]['venue']['location']['state'] + " " +
										data['response']['groups'][0]['items'][num]['venue']['location']['postalCode'];
				GoogleMaps.init(myLat, myLng, venueLat, venueLng);
				var location = new google.maps.LatLng(venueLat, venueLng);
				GoogleMaps.addNewMarker(location, venueName);

				$ionicLoading.hide();

			})
			

		}, function(error) {
			console.log("couldnt get location");
		});

	};

	setTimeout($scope.chooseLocation, 1000);

	function calcRoute(myLat, myLng, venueLat, venueLng) {

		var start = new google.maps.LatLng(myLat, myLng);
		var end = new google.maps.LatLng(venueLat, venueLng);
		var bounds = new google.maps.LatLngBounds();

		bounds.extend(start);
		bounds.extend(end);
		map.fitBounds(bounds);

		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.WALKING,
			avoidHighways: true
		};

		directionsService.route(request, function(response, status) {
			if(status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				directionsDisplay.setMap(map);
			} else {
				alert("Directions request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed:" + status);
			}
		})

	}
}]);