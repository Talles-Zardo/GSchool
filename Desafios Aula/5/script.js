function run() {
    let a = document.getElementById('valueone').value;
    let b = document.getElementById('valuetwo').value;
    if (a > b) {
        document.getElementById('result').innerText = `O primeiro número ${a} é maior que o segundo ${b}`
        return;
    } if (a < b) {
        document.getElementById('result').innerText = `O primeiro número ${a} é menor que o segundo ${b}`
        return;
    } else {
        document.getElementById('result').innerText = "Os números são iguais"
    }
}
