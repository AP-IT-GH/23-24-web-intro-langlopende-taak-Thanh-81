fetch('https://fakerapi.it/api/v1/companies?_quantity=100')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // plaats een section met grid
    let table = `<div class="table-responsive"><table class="table"><tr>\
    <th>Naam</th>\
    <th>E-mail</th>\
    <th>Website</th>\
    </tr>`;

    for (let i = 0; i < json.data.length; i++) {
      const klant = json.data[i];
      table += `<tr>\
        <td>${klant.name}</td>\
        <td>${klant.email}</td>\
        <td>${klant.website}</td>\
       </tr> `;
    }
    table += '</table></div>';

    document.getElementById("klanten").innerHTML = table;
  });
