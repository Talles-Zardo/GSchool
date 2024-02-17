// let userName, age, isStudent, user;
// userName = "Talles";
// age = 27;
// isStudent = true;
// let gender = "Male";
// let phoneNumber = 44999515645
// user = [userName, age, isStudent, gender, phoneNumber];

// function rodar(params) {
//     let a = +prompt(`Digite o index do array (0 a ${user.length - 1})`);
//     if (a >= 0 && a <= (user.length - 1)) {
//         alert(`O valor do index é: ${user[a]}. 
//     O primeiro elemento desse array é ${user[0]}.
//     Esse array tem um total de ${user.length} elementos.
//     O último elemento desse array é ${user[user.length-1]}`);
//     }
//     else {
//         alert(`Index inválido`);
//     }
// }

// function helloWorld10() {
//     for (let index = 0; index < 10; index++){
//         console.log("Hello, World " + index);
//     }
// }
//   let a = +prompt("De qual número você quer a tabuada ?")
// function tabuada(){
// for (let index = 1; index < 11; index++) {
//      console.log(`${a} x ${index} = ${a * index}`);
// }
// }
// function reset(){
//     a = +prompt("Digite um novo número para o cálculo do tabuada")
// }
let a = +prompt("Digite um novo número para o cálculo do fatorial");
let b;
function factorial() {
    for (let index = a; index >= 1; index--) {
        
        console.log(`${a * (index-1)}`);

    }
}
function reset() {
    a = +prompt("Digite um novo número para o cálculo do fatorial")
}
