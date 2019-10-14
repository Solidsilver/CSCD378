const btnNums = document.getElementsByClassName("btnNum");
const btnOps = document.getElementsByClassName("btnOperator");
const btnMem = document.getElementsByClassName("btnMem");
const btnCE = document.getElementById("btnCE");
const displayText = document.getElementById("calcDisplay");


console.log('-');
var numPrevTxt = "";
var numCurTxt = "";
var operation = "";
displayText.innerHTML = numCurTxt;

btnCE.onclick = (func => {
    console.log("CE");
    numCurTxt = "";
    numPrevTxt = "";
    displayText.innerHTML = "";
});
// for objs in obj
for (let btn of btnNums) {
    btn.onclick = (func => {
        console.log(btn.innerHTML);
        numCurTxt += btn.innerHTML;
        displayText.innerHTML = numCurTxt;
    });
}

for (let btn of btnOps) {
    // console.log(btn);
    btn.onclick = (func => {
        var opVal = btn.innerHTML;
        if (opVal == "=") {
            if (numPrevTxt != "") {
                numCurTxt = evalOperation(operation);
                numPrevTxt = "";
                displayText.innerHTML = numCurTxt;
            }
        } else if (btn.className.includes("immOp")) {
            numCurTxt = evalOperation(opVal);
            displayText.innerHTML = numCurTxt;
        } else {
            if (numPrevTxt != "") {
                numCurTxt = evalOperation(operation);
                displayText.innerHTML = numCurTxt;
            }
            operation = opVal;
            numPrevTxt = numCurTxt;
            numCurTxt = "";
        }
        console.log(btn.innerHTML);
        // numCurTxt += btn.innerHTML;
        // displayText.innerHTML = numCurTxt;
    });
}

function evalOperation(opStr) {
    var num1Float = parseFloat(numCurTxt);
    var num2Float = parseFloat(numPrevTxt);
    var retVal = "";
    switch (opStr) {
        case "÷":
            retVal = num2Float / num1Float;
            break;
        case "×":
            retVal = num2Float * num1Float;
            break;
        case "–":
            retVal = num2Float - num1Float;
            break;
        case "+":
            retVal = num2Float + num1Float;
            break;
        case "√":
            retVal = Math.sqrt(num1Float);
            break;
        case "%":
            retVal = num1Float / 100.0;
            break;
        case "1/x":
            retVal = 1.0 / num1Float;
            break;
        case "+/–":
            retVal = (-1) * num1Float;
            break;
        default:
            // alert("Operation not Supported");
    }
    console.log("eval("+opStr+", "+num1Float+", "+num2Float+"): " + retVal);
    return retVal;
}


// btnNums.array.forEach(element => {
//     console.log(element);
// });