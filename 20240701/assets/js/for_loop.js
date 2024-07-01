let n1Input = document.querySelector("#n1");
let n2Input = document.querySelector("#n2");
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', () => {
    let n1 = n1Input.value;
    let n2 = n2Input.value;

    for (let i = 1; i <= n1; i++) {
        console.log(`current i is: ${i}`)
        for (let j = 1; j <= n2; j++) {
            let total = i * j;
            console.log(`${i} * ${j} = ${total}`)
        }
    }
})

// let n = 1;
// n++; // n = n + 1
// console.log(n)