let url = 'https://restcountries.com/v3.1/all';


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
                const country = data[i];

                newHTML += ` 
                <div class="card col-4">
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
list();
