
let a = prompt("Hey whats your age?");
a = Number.parseInt(a);//Converting a string into an integer
if(a<0){
    alert("This is invalid age");
}
else if(a < 9){
    alert("You are a kid aand you cannot even think of driving");
}
else if(a < 18 && a>= 9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now drive as you are above 18");
}