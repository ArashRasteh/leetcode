
/**
 * Definition for singly-linked list. 
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) {
        return false;
    }
    while(head.next != null) {
        head.visited = true
        if (head.next.visited) {
            return true
        }
        head = head.next
    }
    return false
};

let a = new ListNode(3);
let b = new ListNode(2);
a.next = b;
let c = new ListNode(0);
b.next = c;
let d = new ListNode(-4);
c.next = b

console.log(hasCycle(a))