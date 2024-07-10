let addBtn = document.querySelector('#add-btn');
let ul = document.querySelector('#menu');

ul.addEventListener('click', (e) => {
    let target = e.target;
    let html = target.innerHTML;
    let tag = target.tagName;
    if (tag.toUpperCase() == 'LI') {
        console.log(html, tag);
    }
})

// const bindLiClick = () => {
//     let lis = document.querySelectorAll('#menu > li');

//     lis.forEach((li, index) => {
//         li.addEventListener('click', () => {
//             console.log(li.innerHTML)
//         })
//     })
// }

addBtn.addEventListener('click', () => {
    let ul = document.querySelector('#menu');
    let li = document.createElement('li');
    li.innerHTML = 'ADD';
    ul.appendChild(li);

    // 如何讓增加的 li 也可以綁定 click 事件?
    // 1.會有重複綁定
    // bindLiClick();

    // 2.會有效能瓶頸
    // ul.innerHTML += '<li>ADD</li>'
    // bindLiClick();

})

// bindLiClick();