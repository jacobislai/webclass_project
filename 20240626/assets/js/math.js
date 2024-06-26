let num1Input = document.querySelector('#num-1');
let num2Input = document.querySelector('#num-2');

let calc1Btn = document.querySelector('#calc-1');
let calc2Btn = document.querySelector('#calc-2');
let calc3Btn = document.querySelector('#calc-3');
let calc4Btn = document.querySelector('#calc-4');
let calc5Btn = document.querySelector('#calc-5');

let response = document.querySelector('#response');

const getNum = () => {
    response.classList.add('d-none');
    response.classList.remove('d-block');

    let n1 = +num1Input.value;
    let n2 = +num2Input.value;

    // equal ==
    if (n1 == '') {
        alert('數字1未填寫');
        num1Input.focus();
        return false;
    }

    if (n2 == '') {
        alert('數字2未填寫');
        num2Input.focus();
        return false;
    }

    return [n1, n2]
}

const addCalc = () => {
    let num = getNum();
    if (!num) {
        return false;
    }

    let result = num[0] + num[1];
    response.innerHTML = `${num[0]} + ${num[1]} = ${result}`;
    response.classList.add('d-block');
    response.classList.remove('d-none');
}


calc1Btn.addEventListener('click', addCalc);