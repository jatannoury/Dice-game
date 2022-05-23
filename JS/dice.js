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



//array that stores the path of each img
numbers=[one,two,three,four,five,six]

nb1=getRandomInt(0,5)
nb2=getRandomInt(0,5)

img1=document.getElementsByClassName("img1")
img2=document.getElementsByClassName("img2")
result=document.getElementsByTagName("h1")

//change the source input of the image tag in the html file
img1[0].src=numbers[nb1]
img2[0].src=numbers[nb2]