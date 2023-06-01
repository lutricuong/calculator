const display = document.querySelector('.display');
const result = document.querySelector('.result');
const numAll = document.querySelectorAll('.num');
const ac = document.querySelector('.ac');
const c = document.querySelector('.c');
const equal = document.querySelector('.equal');
let num1;
let num2;
let op;

ac.addEventListener("click", () => {
    display.textContent = "";
    result.textContent = 0;
});
c.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,display.textContent.length -1);
});
numAll.forEach(num => {
    num.addEventListener("click", () => {
        if (num.textContent == '+' || num.textContent == '-' || num.textContent == 'x' || num.textContent == '/') {
            display.textContent += " ";
            display.textContent += num.textContent;
            display.textContent += " ";
        }
        else display.textContent += num.textContent;
        const arrNumAndOp = display.textContent.split(' ')
        if (arrNumAndOp[2] == "") {
            arrNumAndOp.pop();
        }
        console.log(arrNumAndOp);
        equal.addEventListener("click", () => {
            if (arrNumAndOp.length == 3) {
                numberAndOp(arrNumAndOp);
            }
        })
        
    });
});

function numberAndOp(str) {
    num1 = +str[0];
    num2 = +str[2];
    op = str[1];
    if (op == "+") return result.textContent = num1 + num2;
    if (op == "-") return result.textContent = num1 - num2;
    if (op == "x") return result.textContent = num1 * num2;
    if (op == "/") return result.textContent = num1 / num2;
}