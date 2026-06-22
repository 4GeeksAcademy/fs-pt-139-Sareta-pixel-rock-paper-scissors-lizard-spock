//write your code here
import "./style.css";
const game = (userChoice) =>{
    const userOption = userChoice
    const pcChoice = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    const pcChoiceRandom = pcChoice[Math.floor(Math.random()*pcChoice.length)];
    console.log("ELECCIÓN DEL USUARIO " + userChoice, "ELECCIÓN DEL PC " + pcChoiceRandom);
    const rules = {
        Piedra: ["Tijeras", "Lagarto"],
        Papel: ["Piedra", "Spock"],
        Tijeras: ["Papel", "Lagarto"],
        Lagarto: ["Papel", "Spock"],
        Spock: ["Tijeras", "Piedra"]
    }
    
    if (userOption === pcChoiceRandom){
        document.getElementById("result").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Hay un empate 🤝";
    } else if (rules[userOption].includes(pcChoiceRandom)){
        document.getElementById("result").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Has ganado!!! 🏆"
    } else {
        document.getElementById("result").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Zas!! En toda la boca!! 😬 "
    }
    
    
    return "elección del usuario " + userChoice, "elección del pc " + pcChoiceRandom
}


game("Tijeras")

document.getElementById("Piedra").addEventListener("click", () => {
    game("Piedra");
});
document.getElementById("Papel").addEventListener("click", () => {
    game("Papel");
});
document.getElementById("Tijeras").addEventListener("click", () => {
    game("Tijeras");
});
document.getElementById("Lagarto").addEventListener("click", () => {
    game("Lagarto");
});
document.getElementById("Spock").addEventListener("click", () => {
    game("Spock");
});