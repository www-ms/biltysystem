var weight = document.getElementsByClassName('td41');
var charge= document.getElementsByClassName('td42');
var rupay= document.getElementsByClassName('td61');
var pese= document.getElementsByClassName('td62');
var donebtn= document.getElementById('done');
var valuers= document.getElementById('result');
var tdrupay=document.getElementById('rupay');
var tdpese=document.getElementById('pese');
donebtn.onclick = function () {
    var calculate = [];
    var allpese=[];
    var allrupay=[];
    for (let i = 0; i < weight.length; i++) {
        if ( !isNaN(parseInt(weight[i].children[0].innerHTML)) && !isNaN(parseInt(charge[i].children[0].innerHTML))) {
            calculate.push(weight[i].children[0].innerHTML*charge[i].children[0].innerHTML)
        }
    }
    for (let i = 0; i < rupay.length-1; i++) {
        if (!isNaN(parseInt(rupay[i].children[0].innerHTML)) || !isNaN(parseInt(pese[i].children[0].innerHTML))) {
            allrupay.push(parseInt(rupay[i].children[0].innerHTML));
            allpese.push(parseInt(pese[i].children[0].innerHTML));
        }
    }

    console.log(allrupay);
    var result1 = calculate.reduce(function (a,b) {return a+b},0);
    var result2 = allrupay.reduce(function (a,b) {return a+b},0);
    var result3 = allpese.reduce(function (a,b) {return a+b},0);
    valuers.innerHTML = result1 + result2 + result3/100;
    tdrupay.innerHTML = result2;
    tdpese.innerHTML = result3;
}