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

    function addListNodes(l1, l2, carry) {
        if (!l1 && !l2 && !carry) {
            return null;
        }
        if (!l1) {
            l1 = new ListNode()
        }
        if (!l2) {
            l2 = new ListNode()
        }

        let val = l1.val + l2.val + carry;
        return new ListNode(
            val % 10, 
            addListNodes(l1.next, l2.next, Math.floor(val / 10))

        )
    }
    return addListNodes(l1, l2, 0)

};