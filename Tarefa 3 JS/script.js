let url = 'https://restcountries.com/v3.1/all';

let openModal = (
    countryName,
    countryContinent,
    countryCapital,
    countryPopulation,
    countryArea
) => {
    document.getElementById("modaltext").innerText = "País: " + countryName;
    document.getElementById("modaltext2").innerText = `Continente: ${countryContinent}`;
    document.getElementById("modaltext3").innerText = `Capital: ${countryCapital}`;
    document.getElementById("modaltext4").innerText = `População: Cerca de ${countryPopulation} Habitantes`;
    document.getElementById("modaltext5").innerText = `Área: Cerca de ${countryArea} km²`;
};

let list = () => {
    fetch(url)
        .then((response) => response.json())
        
        .then((data) => {
            let row = document.querySelector('.row')
            let newHTML = ``
            for (let i = 0; i < data.length; i++) {
                //nome do pais: country.translations.por.common
                //imagem do pais: country.flags.png
                //descrição da imagem: country.flags.alt
                //flag: country.flag
                //região: country.region
                //capital: country.capital
                //area: country.area
                //Lingua: country.languages
                //população: country.population
                //moeda: country.currencies
                //continente: country.continents

                const country = data[i];

                newHTML += ` 
                <div style="cursor: default;" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" class="card col-3" onclick="openModal('${country.translations.por.common}', '${country.continents}', '${country.capital}', '${country.population}', '${country.area}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                <div class="card-body">
                    <h5 class="card-title">${country.translations.por.common}</h5>
                    <p class="card-text">
                    Região: ${country.region}
                    </p>
                 </div>
                 </div>
                `
            }
            row.innerHTML = newHTML;
        });
}

function search() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let title = card.querySelector('.card-title').textContent.toLowerCase();
        let region = card.querySelector('.card-text').textContent.toLowerCase();
        if (title.includes(searchValue) || region.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
}

list();