// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var number = [];

for (var i = 0; i < 5; i++) {
    var numberAlert = Math.floor(Math.random() * 10) + 1;
    number.push(numberAlert);
}

alert(number);

var timer = 30;

var interval = setInterval(function () {
    if(timer === 0) {
        clearInterval(interval);
    } else {
        timer --;
    }
    document.getElementById("timer").innerHTML = timer;
}, 1000);

setTimeout(function (){
    
    var numberUser = [];

    for (var i = 0; i < 5; i++) {
        var userPrompt = prompt("Caro utente, inserisci i 5 numeri visti in precedenza");
        numberUser.push(userPrompt);
    }

    var numberRight = [];
    var numberWrong = [];

    for(var i = 0; i < 5; i++) {
    if (number[i] == numberUser[i]) {
        numberRight.push(number[i]);
    } else {
        numberWrong.push(numberUser[i])
    }
}

document.getElementById("timer").innerHTML = "";
document.getElementById("result").innerHTML = "I numeri indovinati sono " + numberRight.length + ", " + "cioè: " + numberRight;
}, 31000);
