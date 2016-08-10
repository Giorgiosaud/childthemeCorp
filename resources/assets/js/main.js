function childGeocode(){
	var geocoder = new google.maps.Geocoder(),
	address2 =String('Calle San Juan Bosco, Puerto La Cruz, Venezuela');
	geocoder.geocode({'address': address2}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map = new google.maps.Map(document.getElementById('map2'), {
				center: results[0].geometry.location,
				zoom: 16
			});
			console.log('redult'+results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				//		icon: image,
				zoomControl: true,
				scaleControl: true,
				position: results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}
