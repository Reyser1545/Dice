
let num1 = 0;
let num2 = 0;
let num3 = 0;

let dice = ["img/d1.png","img/d2.png","img/d3.png","img/d4.png","img/d5.png","img/d6.png"]
function rolldice(){
    num1 = Math.floor(Math.random() * 6);
    num2 = Math.floor(Math.random() * 6);
    num3 = Math.floor(Math.random() * 6);
    document.getElementById("Dice1").src = dice[num1];
    document.getElementById("Dice2").src = dice[num2];
    document.getElementById("Dice3").src = dice[num3];
   

    
}
