// n 个人围成一组，每数到第m 个人，就把他打死。那么第几个人会活着？？

// 1. 数组实现
function whoCanLive(n,m){
    let peoples = []
    // 成员初始化
    for(let i=0;i<n;i++){
        let p = {
            name: i + 1
        }
        peoples.push(p)
    }
    // 从第一个开始
    let index = 0
    while(peoples.length > 1){
        // 要死的，在数据组中的序列
        let target_index = index + m - 1
        let array_target_index = target_index % peoples.length
        // 从死者的后继开始计数，但死者的后继继承了死者的位置，so..
        index = array_target_index
        console.log(peoples[array_target_index],"即将死")
        peoples.splice(array_target_index,1)     
    }
    console.log(peoples)
    return peoples
}


// 2. 链表实现
// 从上次被删除的地方开始删

function whoCanLive2(n,m){
    let {LinkList} = require("./单项循环链表")
    let ll = new LinkList()
    for (let index = 0; index < n; index++) {
        ll.push(index + 1) 
    }
    console.log(ll.length)
    console.log(ll.toString())
    // 从第一个人开始
    let index = 1
    let people = ll.head
    while (ll.length > 1) {
        // 寻找待死之人的前驱
        while (index < m - 1) {
            index++
            people = people.next
        }
        // 要删除head
        if(people.next === ll.head){
            ll.head = people.next.next
        }
        console.log(people.next.data,"死了")
        people.next = people.next.next
        // 计数归1，从死者下一个开始数
        index = 1
        people = people.next
        ll.length -= 1
    }
    console.log(ll.toString())
}

whoCanLive(5,2)
whoCanLive2(5,2)

