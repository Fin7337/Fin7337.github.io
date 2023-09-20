var answer = 0;
var equation = "";
var answerdisplay = document.getElementById("answerdisplay");
const n1 = document.getElementById("1");
const n2 = document.getElementById("2");
const n3 = document.getElementById("3");
const n4 = document.getElementById("4");
const n5 = document.getElementById("5");
const n6 = document.getElementById("6");
const n7 = document.getElementById("7");
const n8 = document.getElementById("8");
const n9 = document.getElementById("9");

const oadd = document.getElementById("plus")
const ominus = document.getElementById("minus")
const oequals = document.getElementById("equals")
n1.addEventListener("click", function(){
    equation+="1";
    answerdisplay.innerText = equation;
})
n2.addEventListener("click", function(){
    equation+="2";
    answerdisplay.innerText = equation;
})
n3.addEventListener("click", function(){
    equation+="3";
    answerdisplay.innerText = equation;
})
n4.addEventListener("click", function(){
    equation+="4";
    answerdisplay.innerText = equation;
})
n5.addEventListener("click", function(){
    equation+="5";
    answerdisplay.innerText = equation;
})
n6.addEventListener("click", function(){
    equation+="6";
    answerdisplay.innerText = equation;
})
n7.addEventListener("click", function(){
    equation+="7";
    answerdisplay.innerText = equation;
})
n8.addEventListener("click", function(){
    equation+="8";
    answerdisplay.innerText = equation;
})
n9.addEventListener("click", function(){
    equation+="9";
    answerdisplay.innerText = equation;
})
oadd.addEventListener("click", function(){
    equation+="+";
    answerdisplay.innerText = equation;
})
ominus.addEventListener("click", function(){
    equation+="-";
    answerdisplay.innerText = equation;
})
oequals.addEventListener("click", function(){
    answer = eval(equation);
    answerdisplay.innerText = answer;
})