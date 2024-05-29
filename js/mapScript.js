let map = L.map('apMap').setView([51.23009, 4.41616], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let polygon = L.rectangle([[51.23041, 4.4155], [51.22991, 4.41675]], { color: 'red', fillColor: 'red', fillOpacity: 0.5 }).addTo(map);

let marker = L.marker([51.23009, 4.41616]).addTo(map); marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();
