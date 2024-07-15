const data = [];

class TodoApp {
    static add(id, name, checked = false) {
        data.push({
            id: id,
            name: name,
            checked: checked
        })

        console.log(data);
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