function qqrcoisa() {
    let a = document.getElementById('inputvalue').value;
    if (a == 1995) {
        document.getElementById('result').innerText = "Você acertou"
        document.getElementById('result').style.color = 'green'
    } else {
        document.getElementById('result').innerText = "Você errou"
        document.getElementById('result').style.color = 'red'
    }
}
