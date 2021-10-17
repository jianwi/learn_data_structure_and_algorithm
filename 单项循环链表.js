class Node {
    constructor(data){
        this.next = null,
        this.data = data
    }
}

// 单向循环链表，无头无尾
class LinkList {
    constructor(){
        this.head = null
        this.length = 0
    }
    push(data){
        let newNode = new Node(data)
        if(this.length < 1){ // 空链表时，新加的就是头
            this.head = newNode
            // head.next 指向自己
            this.head.next = this.head
        }else{
            let temp_node = this.head
            // 寻找尾结点，即 node.next === this.head
            while (temp_node.next !== this.head) {
                temp_node = temp_node.next
            }
            temp_node.next = newNode
            newNode.next = this.head
        }
        this.length += 1
        return data
    }
    remove(value){
        let temp = this.head
        // 寻找前驱
        while (temp.next.value !== value) {
            temp = temp.next
        }
        temp.next = temp.next.next
    }
    find(value){
        let temp = this.head
        while (temp.value !== value) {
            temp = temp.next
        }
        return temp
    }
    toString(){
        if(this.length<1){
            return ""
        }
        let str = ""
        let temp = this.head
        if(this.length === 1){
            str += temp.data
            return str
        }
        // 一直遍历到尾结点
        while (temp.next != this.head) {
            str += temp.data
            temp = temp.next
        }
        // 尾节点的加一下
        str += temp.data

        return str
    }
}


let ll = new LinkList()
// ll.push("7")
console.log(ll.toString())

ll.push("1")
ll.push("2")
ll.push("3")
ll.push("4")
ll.push("5")
ll.push("6")

// ll.removeFromIndex(8)
// console.log(ll.toString())

module.exports = {
    LinkList
}