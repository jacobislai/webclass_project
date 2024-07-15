import { TodoStorage } from "./TodoStorage.js";

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
}

export { TodoApp }