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
    }
}

export { TodoApp }