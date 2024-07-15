let itemName = document.querySelector('#item-name');
let addBtn = document.querySelector('#add-btn');
let todo = document.querySelector('#todo-item');

const generateIndex = () => {
    return Math.floor(Math.random() * 1000);
}

const originLi = (name) => {
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label');

    let index = generateIndex();
    checkbox.type = 'checkbox';
    checkbox.id = `todo-item-${index}`;
    label.innerHTML = name;
    label.htmlFor = `todo-item-${index}`;

    li.appendChild(checkbox);
    li.appendChild(label);
    return li;
}

const strLi = (name) => {
    let index = generateIndex();
    return `<li>
        <input type="checkbox" id="todo-item-${index}">
        <label for="todo-item-${index}">${name}</label>
    </li>`
}

const addItem = (name) => {
    // let li = originLi(name);
    // todo.appendChild(li);


    let li = strLi(name);
    todo.innerHTML += li;
}

addBtn.addEventListener('click', async () => {
    let value = itemName.value;
    if (!value) {
        await Swal.fire({
            title: '新增失敗',
            html: '尚未輸入項目名稱',
            icon: 'error'
        })
        console.log(123);
        setTimeout(() => {
            itemName.focus();
        }, 500)
        return;
    }
    addItem(value);

    // 輸入框內容清空
    itemName.value = '';
    itemName.focus();
});