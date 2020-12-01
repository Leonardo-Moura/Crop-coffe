class Lista {
    constructor() {
        this.list = new Array();
    }

    addElement(element) {
        let id = 1;
        if (this.list.length > 0) {
            id = this.list.map(x => x.id).reduce(function (x1, x2) { return Math.max(x1, x2) });
            id += 1;
        }

        element.id = id;
        this.list.push(element);
    }

    remove(id) {
        const index = this.list.findIndex(x => x.id === id);
        this.list.splice(index, 1);
    }

    update(id, element) {
        const index = this.list.findIndex(x => x.id === id);
        element.id = id;
        this.list[index] = element;
    }

    getElement(id) {
        return this.list.find(x => x.id === id);
    }

    getAllElements() {
        return this.list.map(x => x);
    }
}