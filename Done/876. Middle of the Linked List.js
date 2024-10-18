/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let len = 0;
  let curr = head;

  if (head) {
      len++;
  }

  while(curr.next) {
      len++;
      curr = curr.next;
  }
  
  len = Math.ceil((len + 1)/2.0)
  
  curr = head;
  for (let i = 0; i < len - 1; i++) {
      curr = curr.next;
  }

  return curr;
};