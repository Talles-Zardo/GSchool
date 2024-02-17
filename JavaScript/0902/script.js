// let actionButton = document.getElementById('actionButton');
// function action() {
//     console.log(actionButton);
//     actionButton.innerText = "Botão Clicado";
//     actionButton.style.backgroundColor = 'red';
// }

// let count = 0;
// function clickCounter() {
//     count++
//     if (count === 1) {
//         actionButton.innerText = `Esse botão foi clicado ${count} vez`
//     } else {
//         actionButton.innerText = `Esse botão foi clicado ${count} vezes`
//     }
// }
// function colorTest(params) {
//     if (firstInput.value == ""){
//         actionButton.style.backgroundColor = 'red'
//     }
//     else{
//         actionButton.style.backgroundColor = 'green',
//         actionButton.style.padding = '15px'
//         actionButton.style.border =  'none'
//         actionButton.style.borderRadius = '15px'
//     }
//     }
// let actionButton = document.getElementById('actionButton')
// let firstInput = document.getElementById('firstInput')

let ageButton = document.getElementById('ageButton')
let age = document.getElementById('age')
let message = document.getElementById('message')

let nameStorage = localStorage.getItem("userName")

if (nameStorage) {
    age.value = nameStorage
}

function ofAge() {
    if (age.value === "") {
        alert("Digite um valor válido")
        message.innerText = "Digite um valor válido"
        message.style.color = "darkorange"
        return
    }
    localStorage.setItem("userName", age.value)
    message.innerText = "Nome Salvo"
    message.style.color = "darkgreen"
}


