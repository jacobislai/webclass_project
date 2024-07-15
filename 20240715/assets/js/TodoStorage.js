const key = 'todo-app';

class TodoStorage {
    static write(data) {
        localStorage.setItem(key, data)
    }

    static read() {
        return localStorage.getItem(key);
    }
}

export { TodoStorage }