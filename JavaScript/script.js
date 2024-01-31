// let a, b, c;
// a = +prompt("Digite um número:");
// b = +prompt("Digite outro número:");

// c = Math.max(a,b);
// console.log(`O maior número é ${c}`);

let a, b;
b = 101;
function random() {
    a = Math.floor(Math.random() * 100);
    console.log(a);
}

function start(params) {
    while (b != a) {
        b = +prompt("Digite seu chute: ");
        if (b == a) {
            alert("Parabéns, você acertou!");
            console.log("Parabéns, você acertou!");
        }
        else if (b > a) {
            alert(`Você chutou ${b}, porém o numero desejado é menor`);
            console.log(`Você chutou ${b}, porém o numero desejado é menor`);
        }
        else {
            alert(`Você chutou ${b}, porém o numero desejado é maior`);
            console.log(`Você chutou ${b}, porém o numero desejado é maior`);
        }
    }
}

function fatorial(params) {
    let x, y;
    y = 1;
    x = +prompt("De qual número você gostaria de calcular o fatorial ?")
    if (x < 0) {
        alert("Não existe fatorial de número negativo.");
        console.log("Não existe fatorial de número negativo.");
    } else if (x == 0) {
        alert(`O Fatorial é igual a 1`);
        console.log(`O Fatorial é igual a 1`);
    } else if (x == 1) {
        alert(`O Fatorial é igual a 1`);
        console.log(`O Fatorial é igual a 1`);
    }
    else {
        for (let i = 2; i <= x; i++) {
            y = y * i;
        }
        alert(`O Fatorial é igual a ${y}`);
        console.log(`O Fatorial é igual a ${y}`);
    }


}
