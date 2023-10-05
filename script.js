let BandScore = 0;
var name =prompt("Enter your name")
if(name==false){
    console.log("You did not answered")
}
else{
    console.log(name + " is your name")
}
var age =+prompt("Enter your age")
if(age==false){
    console.log("You did not answered")
}
else{
    console.log(age + " is your age")
}
var quise1 =+prompt("120+120=?")
if(quise1===120+120){
    console.log(120+120 +" is true answer")
    BandScore++;
}else if(quise1==false){
    console.log("You did not answered")
}
else{
    console.log(quise1 +" is false answer. "+ (120+120) +" is true")
}
var quise2 =+prompt("55-35=?")
if(quise2===55-35){
    console.log(55-35 +" is true answer")
    BandScore++;
}else if(quise2==false){
    console.log("You did not answered")
}
else{
    console.log(quise2 +" is false answer. "+ (55-35) +" is true")
}
var quise3 =+prompt("7*5=?")
if(quise3===7*5){
    console.log(7*5 +" is true answer")
    BandScore++;
}else if(quise3==false){
    console.log("You did not answered")
}
else{
    console.log(quise3 +" is false answer. "+ (7*5) +" is true")
}
var quise4 =+prompt("175/5=?")
if(quise4===175/5){
    console.log(175/5 +" is true answer")
    BandScore++;
}else if(quise4==false){
    console.log("You did not answered")
}
else{
    console.log(quise4 +" is false answer. "+ (175/5) +" is true")
}
var quise5 =+prompt("26/3=?")
if(quise5===26%3){
    console.log(26%3 +" is true answer")
    BandScore++;
}else if(quise5==false){
    console.log("You did not answered")
}
else{
    console.log(quise5 +" is false answer. "+ (26%3) +" is true")
}
alert(BandScore + " is your score")


