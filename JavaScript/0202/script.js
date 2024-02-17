// Aula 4 //
let students = ["Jack", "Jorge", "Jasper"];

function accessIndexes() {
    for (let i = 0; i < students.length; i++) {
        console.log(`O índex do elemento ${students[i]} é: ${i}`);
    }
}

let me = {
    name: "Talles",
    age: 27,
    height: 1.83,
    hobbies: ["Jogar", "Dormir", "Ver Filmes"],
    pets: [{ name: "Sköl", breed: "Pitbull" }, { name: "Bjorn", breed: "German Shepard" }, { name: "Freya", breed: "Rottweiler" }]

};
// console.log(students);
// console.log(me);
// console.log(me.height);
// console.log(me.hobbies[1]);
// me.pets[2].breed = "Siberian Husky";
// console.log(me.pets[2].breed);
// me.pets[2].offspring = false;
// console.log(me.pets[2]);
// delete me.pets[2].offspring;
// console.log(me.pets[2]);

function showDogs(params) {
    for (let index = 0; index < me.pets.length; index++) {
        // console.log(me.pets[index]) // Mostra tudo sobre os dogs //
        console.log(me.pets[index].name); // Mostra apenas os nomes //
        
    }
}
console.log(me);
let meString = JSON.stringify(me); // Transforma o array/objeto em string
console.log(meString);
console.log(JSON.parse(meString)); // Retorna a string para array/objeto
