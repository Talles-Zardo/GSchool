function tabuada() {
    let a = document.getElementById('number').value
    let novo = document.querySelector('.novo');
    let newHTML = ``

    for (let index = 1; index < 11; index++) {
        console.log(`${a} x ${index} = ${a * index}`);

        newHTML += `<p>${a} x ${index} = ${a * index}</p>`
    }
    novo.innerHTML = newHTML;
}