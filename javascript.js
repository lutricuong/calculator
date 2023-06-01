const display = document.querySelector('.display');
const result = document.querySelector('.result');
const numAll = document.querySelectorAll('.num');
const operation = document.querySelectorAll('.operation');
const ac = document.querySelector('.ac');
const c = document.querySelector('.c');
const equal = document.querySelector('.equal');
let arrNumAndOp;
let num1;
let num2;
let op;

function numberAndOp(str) {
    num1 = +str[0];
    num2 = +str[2];
    op = str[1];
    if (op == "+") return result.textContent = num1 + num2;
    if (op == "-") return result.textContent = num1 - num2;
    if (op == "x") return result.textContent = num1 * num2;
    if (op == "/") return result.textContent = num1 / num2;
}

ac.addEventListener('click', () => {
    display.textContent = '';
    result.textContent = 0;
});
c.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,display.textContent.length -1);
});
equal.addEventListener('click', () => {
    if (arrNumAndOp.length == 3) {
        numberAndOp(arrNumAndOp);
    }
})

numAll.forEach(num => {
    num.addEventListener('click', () => {
        display.textContent += num.textContent;
        arrNumAndOp = display.textContent.split(' ');
        if (arrNumAndOp[2] == '') {
            arrNumAndOp.pop();
        }
        console.log(arrNumAndOp);
    });
});

operation.forEach(oper => {
    oper.addEventListener('click', () => {
            display.textContent += ' ';
            display.textContent += oper.textContent;
            display.textContent += ' ';
            arrNumAndOp = display.textContent.split(' ');
            if (arrNumAndOp[2] == '') {
                arrNumAndOp.pop();
            }
            console.log(arrNumAndOp);
            if (arrNumAndOp.length > 3) {
                numberAndOp(arrNumAndOp);
                display.textContent = result.textContent + ' ' + oper.textContent + ' ';
            }
    })
})

