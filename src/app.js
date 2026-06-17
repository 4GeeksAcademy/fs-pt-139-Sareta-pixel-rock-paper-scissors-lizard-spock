//write your code here
import "./style.css";
const juego = (userChoice) =>{
    const opcionUsuario = userChoice
    const pcChoice = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    const pcChoiceRandom = pcChoice[Math.floor(Math.random()*pcChoice.length)];
    console.log("ELECCIÓN DEL USUARIO " + userChoice, "ELECCIÓN DEL PC " + pcChoiceRandom);
    const reglas = {
        Piedra: ["Tijeras", "Lagarto"],
        Papel: ["Piedra", "Spock"],
        Tijeras: ["Papel", "Lagarto"],
        Lagarto: ["Papel", "Spock"],
        Spock: ["Tijeras", "Piedra"]
    }
    
    if (opcionUsuario === pcChoiceRandom){
        document.getElementById("resultado").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Hay un empate 🤝";
    } else if (reglas[opcionUsuario].includes(pcChoiceRandom)){
        document.getElementById("resultado").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Has ganado!!! 🏆"
    } else {
        document.getElementById("resultado").innerHTML = "La máquina ha elegido:🥁... " + pcChoiceRandom + "! Zas!! En toda la boca!! 😬 "
    }
    
    
    return "elección del usuario " + userChoice, "elección del pc " + pcChoiceRandom
}


juego("Tijeras")

document.getElementById("Piedra").addEventListener("click", () => {
    juego("Piedra");
});
document.getElementById("Papel").addEventListener("click", () => {
    juego("Papel");
});
document.getElementById("Tijeras").addEventListener("click", () => {
    juego("Tijeras");
});
document.getElementById("Lagarto").addEventListener("click", () => {
    juego("Lagarto");
});
document.getElementById("Spock").addEventListener("click", () => {
    juego("Spock");
});