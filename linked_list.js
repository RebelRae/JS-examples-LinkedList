class Node {
    data = null
    next = null
    constructor(data) {
        this.data = data
    }
}
class LinkedList {
    head = null
    constructor(length) {
        this.head = new Node(Math.floor(1 + Math.random() * 50))
        let prev = this.head
        for (let i = 1; i < length; i++) {
            const node = new Node(Math.floor(1 + Math.random() * 50))
            prev.next = node
            prev = node
        }
    }
    print = () => {
        let output = ""
        let current = this.head
        while (current) {
            output += `${current.data} -> `
            current = current.next
        }
        console.log(`${output}\n`)
    }
    insert = (value) => {
        const node = new Node(value)
        node.next = this.head
        this.head = node
    }
    insertAt = (value, index) => {
        if(index == 0) {
            this.insert(value)
            return
        }
        let current = this.head
        let prev = null
        for (let i = 0; i <= index; i++) {
            if(i == index) {
                const node = new Node(value)
                prev.next = node
                node.next = current
            }
            if(!current) return
            prev = current
            current = current.next
        }
    }
    deleteAt = (index) => {
        if(index == 0) {
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        for (let i = 0; i <= index; i++) {
            if(i == index) {
                prev.next = current.next
            }
            if(!current.next) return
            prev = current
            current = current.next
        }
    }
    search = (value) => {
        return this.#searchNext(this.head, value)
    }
    #searchNext = (node, value) => {
        if(!node)
            return null
        if(node.data == value)
            return node
        return this.#searchNext(node.next, value)
    }
    toArray = () => {
        let arr = []
        let current = this.head
        while(current) {
            arr.push(current.data)
            current = current.next
        }
        return arr
    }
}

module.exports = {
    Node,
    LinkedList
}