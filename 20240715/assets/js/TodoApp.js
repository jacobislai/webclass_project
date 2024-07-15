import { TodoStorage } from "./TodoStorage.js";

let uid = '';
let data = [];

class TodoApp {
    static add(id, name, checked = false) {
        data.push({
            id: id,
            name: name,
            checked: checked
        })

        TodoStorage.write(data);
    }

    static restore() {
        data = TodoStorage.read();
    }

    static setChecked(index, checked) {
        data[index].checked = checked;
        TodoStorage.write(data);
    }

    static html() {
        let html = '';
        data.forEach((item, index) => {
            let checked = item.checked ? 'checked' : '';
            html += `<li>
                    <input type="checkbox" data-id="${item.id}" id="todo-item-${index}" ${checked}>
                    <label for="todo-item-${index}">${item.name}</label>
                </li>`
        })
        return html;
    }

    static async init() {
        uid = localStorage.getItem('todo-app-uid');
        if (!uid) {
            let result = await Swal.fire({
                title: '輸入 UID',
                input: 'text'
            })
            if (!result.value) {
                this.init()
                return;
            }

            uid = result.value;
        }

        localStorage.setItem('todo-app-uid', uid)
        TodoStorage.setUid(uid);

        let currentUid = document.querySelector('#current-uid');
        currentUid.innerHTML = uid;

        let auth = document.querySelector('#is-auth');
        auth.classList.add('authed');

        currentUid.addEventListener('click', async (e) => {
            e.preventDefault();
            let result = await Swal.fire({
                title: '確定更換 UID?',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: '等等',
                confirmButtonText: '確定'
            })

            if (result.isConfirmed) {
                localStorage.setItem('todo-app-uid', '')
                this.init();
            }
        })
    }
}

export { TodoApp }