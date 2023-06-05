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

ac.addEventListener('click', acClear);
c.addEventListener('click', cDelete);
equal.addEventListener('click', () => setEqual(arrNumAndOp));
numAll.forEach(num => num.addEventListener('click', () => setNum(num)));
operation.forEach(oper => oper.addEventListener('click', () => setOper(oper)))

function addAndRemoveTransition(e) {
    e.classList.add('play');
    e.addEventListener('transitionend', () => e.classList.remove('play'));
}
function acClear() {
    addAndRemoveTransition(ac);
    display.textContent = 0;
    result.textContent = ''; 
}
function cDelete() {
    addAndRemoveTransition(c);
    if (display.textContent == 0 && result.textContent == '') {
        display.textContent = 0;
        result.textContent = '';
    }
    else if (result.textContent != '') {
        display.textContent = 0;
        result.textContent = '';
    }
    else if (display.textContent.slice(display.textContent.length-1) == ' ') {
        display.textContent = display.textContent.slice(0,display.textContent.length -3);
    }
    else     display.textContent = display.textContent.slice(0,display.textContent.length -1);
}
function setEqual(e) {
    addAndRemoveTransition(equal);
    num1 = +e[0];
    num2 = +e[2];
    op = e[1];
    if (e.length == 1 || e.length == 2) return result.textContent = num1;
    if (op == "+") return result.textContent = num1 + num2;
    if (op == "-") return result.textContent = num1 - num2;
    if (op == "x") return result.textContent = num1 * num2;
    if (op == "/") return result.textContent = num1 / num2;
}
function setNum(e) {
    addAndRemoveTransition(e);
    if (display.textContent == 0) {
        display.textContent = '';
        display.textContent += e.textContent;
    }
    else display.textContent += e.textContent;
    arrNumAndOp = display.textContent.split(' ');
    if (arrNumAndOp[2] == '') {
        arrNumAndOp.pop();
    }
}
function setOper(e) {
    addAndRemoveTransition(e);
    if (display.textContent.slice(display.textContent.length-2) == '+ '
        || display.textContent.slice(display.textContent.length-2) == '- '
        || display.textContent.slice(display.textContent.length-2) == 'x '
        || display.textContent.slice(display.textContent.length-2) == '/ ') {
        display.textContent = display.textContent.slice(0,display.textContent.length -3);   
    }
    if (e.textContent == '-' && display.textContent == '0') {
        display.textContent = '-';
    }
    else if (e.textContent == '+' && display.textContent == ''
        || e.textContent == 'x' && display.textContent == ''
        || e.textContent == '/' && display.textContent == '') {
        display.textContent = '';
    }
    else {
        display.textContent += ' ';
        display.textContent += e.textContent;
        display.textContent += ' ';
    }
    arrNumAndOp = display.textContent.split(' ');
    if (arrNumAndOp[2] == '') {
        arrNumAndOp.pop();
    }
    if (arrNumAndOp.length > 3) {
        numberAndOp(arrNumAndOp);
        display.textContent = result.textContent + ' ' + e.textContent + ' ';
    }
}