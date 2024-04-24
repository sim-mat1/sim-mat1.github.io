var i=0;
var txt="Welcome to Factory Internet";
var speed=50;

document.getElementById("demo").addEventListener("load", typeWriter)
function typeWriter(){
    if (i<txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}