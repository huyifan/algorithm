/*
* 掌握链表数据结构
  考虑边界情况 2
* */


function ListNode(val) {
    return {
        val,
        next:null
    }
 }

 const a1=ListNode(1)
 const a2=ListNode(2)
a1.next=a2
 const a3=ListNode(4)
a2.next=a3

const b1=ListNode(1)
const b2=ListNode(3)
b1.next=b2
const b3=ListNode(4)
b2.next=b3


const mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
console.log(mergeTwoLists(a1,b1))