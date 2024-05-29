fetch('https://fakerapi.it/api/v1/persons?_quantity=20')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    // plaats een section met grid
    let html = '<div class="accordion accordion-flush" id="accordionExample">';

    for (let i = 0; i < json.data.length; i++) {
      const person = json.data[i];
      
      html += `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3 oranje2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${person.firstname} ${person.lastname}
            </button>
          </h2>
          <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p><span class="oranje2">Adres:</span> ${person.address.street}, ${person.address.zipcode} ${person.address.city}</p>  
              <p><span class="oranje2">Telefoon:</span> ${person.phone}</p>
              <p><span class="oranje2">E-mail:</span> ${person.email}</p>
              <p>lat: ${person.address.latitude}</p>
              <p>lon: ${person.address.longitude}</p>
              <button onclick="coordinaten('${person.address.latitude}', '${person.address.longitude}', '${person.firstname}', '${person.lastname}')">Toon op map</button>
            </div>
          </div>
      </div>`;
    }
    html += '</div>';
    document.getElementById("gebruikers").innerHTML = html;
  });