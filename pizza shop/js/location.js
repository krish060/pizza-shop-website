// Ensure to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    const locationButton = document.getElementById('get-location');

    if (mapElement && locationButton) {
        locationButton.addEventListener('click', () => {
            // Check if Geolocation is available
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        initMap(latitude, longitude);
                    },
                    () => {
                        alert('Unable to retrieve your location');
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser');
            }
        });
    }

    function initMap(lat, lng) {
        const location = { lat, lng };
        const map = new google.maps.Map(mapElement, {
            center: location,
            zoom: 12,
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'You are here!',
        });
    }
});
