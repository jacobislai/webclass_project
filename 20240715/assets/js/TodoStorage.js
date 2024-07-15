const key = 'todo-app';

class TodoStorage {
    static write(data) {
        data = JSON.stringify(data);
        localStorage.setItem(key, data)
    }

    /**
     * 
     * @returns array
     */
    static read() {
        let str = localStorage.getItem(key);
        if (str) {
            return JSON.parse(str);
        }
        return [];
    }
}

export { TodoStorage }