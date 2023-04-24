
//Bonus Problem-
// create linked list class

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
//
// convert bellow javascript solution into typescript

// class MyNode {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = this.head;
//         this.length = 0;
//     }
//     addToHead(val) {
//         let node = new MyNode(val);
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//         }
//         else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.length++;
//         return this.head;
//     }
//     addToTail(val) {
//         let node = new MyNode(val);
//         if (!this.tail) {
//             this.head = node;
//             this.tail = node;
//         }
//         else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.length++;
//         return this.head;
//     }
//     addAtIndex(idx, val) {
//         if (idx === 0) {
//             this.addToHead(val);
//         }
//         else if (idx >= this.length) {
//             this.addToTail(val);
//         }
//         else {
//             let count = 1;
//             let curr = this.head;
//             let node = new MyNode(val);
//             while (curr) {
//                 if (count === idx) {
//                     let next = curr.next;
//                     curr.next = node;
//                     node.next = next;
//                     break;
//                 }
//                 count++;
//                 curr = curr.next;
//             }
//         }
//         return null;
//     }
//     removeFromHead() {
//         if (this.head) {
//             this.head = this.head.next;
//         }
//         return this.head;
//     }
//     removeFromTail() {
//         let curr = this.head;
//         while (curr && curr.next && curr.next.next) {
//             curr = curr.next;
//         }
//         if (curr) {
//             curr.next = null;
//         }
//         return this.head;
//     }
//     printList() {
//         let res = [];
//         let curr = this.head;
//         while (curr) {
//             res.push(curr.value);
//             curr = curr.next;
//         }
//         return res.join("->");
//     }
// }
/*------------------------------------------write code here-----------------------------------------------*/






// -----------------------------------------Uncomment testcases-------------------------------------------------------
// let listVals = [1,2,3,4,5,6,7,8,9,10,11]
// let myList:LinkedList = new LinkedList()
// for(let i=0; i<listVals.length;i++){
//     myList.addToTail(listVals[i])
// }
// myList.addToHead(0)
// console.log(myList.printList())  // 0->1->2->3->4->5->6->7->8->9->10->11
// myList.addAtIndex(5,12)
// console.log(myList.printList())  // 0->1->2->3->4->12->5->6->7->8->9->10->11

// myList.removeFromHead()
// console.log(myList.printList()) //1->2->3->4->12->5->6->7->8->9->10->11

// myList.removeFromTail()
// myList.removeFromTail()

// console.log(myList.printList()) //1->2->3->4->12->5->6->7->8->9
