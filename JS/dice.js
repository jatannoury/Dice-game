//storing the paths of images into variables
const one="images/dice1.png"
const two="images/dice2.png"
const three="images/dice3.png"
const four="images/dice4.png"
const five="images/dice5.png"
const six="images/dice6.png"
 
//function that returns a random integer
function getRandomInt(min, max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max - min +1)) + min;
        }
