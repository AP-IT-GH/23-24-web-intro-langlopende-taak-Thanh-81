function coordinaten(personlatitude, personlongitude, personfirstname, personlastname) {
  const latitude = personlatitude;
  const longitude = personlongitude;
  const firstname = personfirstname;
  const lastname = personlastname;
  
  /*map = map.remove();

  if(map){map.remove()};*/

  let map = L.map('CoordinatenMap').setView([latitude, longitude], 13);
  
  console.log(latitude, longitude);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 6,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let marker = L.marker([latitude, longitude]).addTo(map); 
  marker.bindPopup(`<b>${firstname}</b><br>${lastname}`).openPopup();

}
