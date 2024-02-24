
function roll() {
    let a = document.getElementById('oddoreven').value
    if (a <= 0) {
        document.getElementById('shownumber').innerText = "O número é nulo ou negativo"
        return;
    }
    if (a % 2 == 0) {
        document.getElementById('shownumber').innerText = "O número é par"
    } else {
        document.getElementById('shownumber').innerText = "O número é impar"
    }
}