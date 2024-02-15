let c1, c2, c3;


function run() {
    c1 = document.getElementById('nameInput').value;
    c2 = document.getElementById('phoneInput').value;
    c3 = document.getElementById('emailInput').value;

    if (c1 == "") {
        document.getElementById('nameP').style.color = "darkred"
        document.getElementById('nameP').innerText = "Preencha corretamente o campo acima"
        document.getElementById('sendButton').style.backgroundColor = 'red'
        document.getElementById('sendButton').style.color = "white"
        document.getElementById('dataSent').innerText = ""
    } else {
        document.getElementById('nameP').innerText = ""
    }

    if (c2 == "") {
        document.getElementById('phoneP').style.color = "darkred"
        document.getElementById('phoneP').innerText = "Preencha corretamente o campo acima"
        document.getElementById('sendButton').style.backgroundColor = 'red'
        document.getElementById('sendButton').style.color = "white"
        document.getElementById('dataSent').innerText = ""
    } else{
        document.getElementById('phoneP').innerText = ""
    }

    if (c3 == "") {
        document.getElementById('emailP').style.color = "darkred"
        document.getElementById('emailP').innerText = "Preencha corretamente o campo acima"
        document.getElementById('sendButton').style.backgroundColor = 'red'
        document.getElementById('sendButton').style.color = "white"
        document.getElementById('dataSent').innerText = ""
    } else{
        document.getElementById('emailP').innerText = ""
    }
    
    if (c1 && c2 && c3) {
        document.getElementById('sendButton').style.backgroundColor = 'green'
        document.getElementById('dataSent').style.color = "darkgreen"
        document.getElementById('dataSent').innerText = "Formulário enviado"
        document.getElementById('nameP').innerText = ""
        document.getElementById('phoneP').innerText = ""
        document.getElementById('emailP').innerText = ""
        return
    }
}