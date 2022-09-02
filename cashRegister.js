var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#message");
var table = document.querySelector(".change-return");

var awailableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", changeOperation)

function changeOperation(){
    hideMassage();
    if(billAmount.value > 0){
        var cash = cashGiven.value;
        var bill = billAmount.value;

        if(cash > bill){
            var amountToBeReturn = cashGiven.value - billAmount.value;
            changeCalculator(amountToBeReturn);
        }
        else{
            invalidInput("Do you wanna wash plates?");
        }
    }
    else{
        invalidInput("Please enter the amount greater than zero");
    }
}

function hideMassage(){
    message.style.display = "none";
}

function showMassage(){
    message.style.display = "block";
}

function invalidInput( msg ){
    showMassage();
    message.innerHTML = msg;
}

function changeCalculator(amountToBeReturn){
    for(var i=0; i<awailableNotes.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturn / awailableNotes[i]);
        amountToBeReturn = amountToBeReturn % awailableNotes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
    }
}