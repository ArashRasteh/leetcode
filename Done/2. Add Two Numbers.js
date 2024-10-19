/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry1 = 0;
    let l3 = new ListNode(0, new ListNode())
    let l3head = l3.next;
    let firstNum = true;
    do {
        console.log('l3', JSON.stringify(l3))
        l3 = l3.next;
        if (firstNum) {
            l3head = l3;
            firstNum = false;
        } else {
            if (l1.next) {
                l1 = l1.next
            } else {
                l1 = new ListNode()
            }

            if (l2.next) {
                l2 = l2.next
            } else {
                l2 = new ListNode()
            }
        }
        console.log(l1.val, l2.val, carry1)
        let addition = l1.val + l2.val + carry1;
        console.log('addition: ', addition)
        
        if (addition >= 10) {
            carry1 = 1;
            addition = addition % 10;
        } else {
            carry1 = 0;
        }


        l3.val = addition;
        if (l1.next || l2.next || carry1 === 1) {
            l3.next = new ListNode()
        }
        

    } while (l1.next || l2.next || l3.next)

    return l3head;

};