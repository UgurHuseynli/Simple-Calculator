/* Get The Elements */

let result = document.querySelector("#result");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let form = document.querySelector("form");
let resetBtn = document.querySelector("#reset");

/* Operators */

let addition = document.querySelector("#addition");
let substract = document.querySelector("#substract");
let multiply = document.querySelector("#multiply");
let division = document.querySelector("#division");


/* Event Listeners */

addition.addEventListener("click", () => {
    let resultInner = Number(num1.value) + Number(num2.value);
    result.innerHTML = resultInner;
});

substract.addEventListener("click", () => {
    let resultInner = Number(num1.value) - Number(num2.value);
    result.innerHTML = resultInner;
});

multiply.addEventListener("click", () => {
    let resultInner = Number(num1.value) * Number(num2.value);
    result.innerHTML = resultInner;
});

division.addEventListener("click", () => {
    let resultInner = Number(num1.value) / Number(num2.value);
    result.innerHTML = resultInner;
});

resetBtn.addEventListener("click", () => {
    form.reset();
    result.innerHTML = "0";
});
