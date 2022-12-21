var randomNumber1 = (Math.floor(Math.random()*10)%6)+1;
var randomimg = "images/dice" + randomNumber1 + ".png";
var images = document.querySelectorAll("img")[0];
images.setAttribute("src",randomimg);

var randomNumber2 = (Math.floor(Math.random()*10)%6)+1;
var randomimg2 = "images/dice" + randomNumber2 + ".png";
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src",randomimg2);

if(randomNumber1>randomNumber2)
{
     document.querySelector("h1").innerHTML="Player 1 wins";
    
}else if(randomNumber1<randomNumber2)
{
     document.querySelector("h1").innerHTML="Player 2 wins";
    
}
else{
    document.querySelector("h1").innerHTML="draw";
}