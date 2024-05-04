
const button= document.getElementById('p1');
const p2= document.getElementById('p2');
const p3= document.getElementById('p3');
const p4= document.getElementById('p4');

let randomnum1;
let randomnum2;
let randomnum3;
button.onclick= function(){ 
    randomnum1= Math.floor(Math.random()*6)+1;
    randomnum2= Math.floor(Math.random()*6)+1;  
    randomnum3= Math.floor(Math.random()*6)+1;

    p2.textContent= randomnum1;
    p3.textContent= randomnum2;
    p4.textContent= randomnum3;

}