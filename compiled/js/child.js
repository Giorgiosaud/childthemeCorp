function childGeocode(){
	var geocoder = new google.maps.Geocoder(),
		url=location.origin,
	address =String('calle  San Juan Bosco puerto la cruz,Venezuela');
	window.address=address;
	geocoder.geocode({'address': address}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map = new google.maps.Map(document.getElementById('map2'), {
				center: results[0].geometry.location,
				zoom: 16
			});
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
//# sourceMappingURL=child.js.map
