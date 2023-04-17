const button = document.getElementById('btfetch');
const outputDiv = document.getElementById('output');


button.addEventListener('click', () => {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            continents {
              code
              name
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(({ data }) => {
        const countries = data.countries;
        const countryList = countries.map(country => `<li>${country.name} (${country.code})</li>`).join('');
        const outputHTML = `<ul>${countryList}</ul>`;
        outputDiv.innerHTML = outputHTML;
      });
  });
