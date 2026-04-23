// Exercice 1:
let num1=prompt("Entrer le premier nombre: ");
let num2=prompt("Entrer la deuxieme nombre: ");
let a=Number(num1);
let b=Number(num2);
console.log("Somme:"+(a+b));
console.log("Difference:"+(a-b));
console.log("Produit:"+(a*b));
console.log("Devision:"+(a/b));
// Exercice 2:
let nombre= Math.floor(Math.random()*10)+1;
let x;
let i= 0;
do  {
    x=Number(prompt("Entrer un nombre entre 1 et 10:"));
    i=i+1;
    if (x < nombre){
    alert("Plus grand !");}
    if (x > nombre){ 
        alert("Plus petit !");}
        }
        while(x != nombre);
        alert ("Bravo !");
// Exercice 3:
let QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Que font 5 + 5 ?", "10"],
    ["Qui est le nom de president de USA ?", "Trump"],
];
function lancerQuiz() {
    let score = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
        let userAnswer = prompt(QUESTIONS[i][0]);
        if (userAnswer === QUESTIONS[i][1]) {
            window.alert("Correct answer!");
            score = score + 1;
        } else {
            window.alert("Wrong answer.");
        }
    }
    window.alert("Vous avez répondu à " + score + " bonnes réponses sur " + QUESTIONS.length + ".");
}
