let a, b;

function calcular() {
    a = document.getElementById('peso').value;
    b = document.getElementById('altura').value;
    console.log(a,b);
    if (b >= 0 && a >= 0) {
        let imc = (a / (b * b));
        if (imc >= 40) {
            document.getElementById('resultado').innerText = `Seu imc é ${imc.toFixed(2)} e você está com obesidade 3`
            return;
        }
        if (imc > 34.9) {
            document.getElementById('resultado').innerText = `Seu imc é ${imc} e você está com obesidade 2`
            return;
        }
        if (imc > 29.9) {
            document.getElementById('resultado').innerText = `Seu imc é ${imc} e você está com obesidade 1`
            return;
        }
        if (imc > 24.9) {
            document.getElementById('resultado').innerText = `Seu imc é ${imc} e você está com sobrepeso`
            return;
        }
        if (imc >= 18.6) {
            document.getElementById('resultado').innerText = `Seu imc é ${imc} e você está no seu peso ideal`
            return;
        }
        else {
            document.getElementById('resultado').innerText = `Seu imc é ${imc} e você está abaixo do peso`
        }
    }


}