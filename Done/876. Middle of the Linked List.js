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

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let t0 = process.hrtime.bigint();
middleNode(head)
let t1 = process.hrtime.bigint();
console.log(`Time: ${(t1 - t0)} nanoseconds`);
console.log(middleNode(head)); // 3

let head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
t0 = process.hrtime.bigint();
middleNode(head2)
t1 = process.hrtime.bigint();
console.log(`Time: ${t1 - t0} nanoseconds`);
console.log(middleNode(head2)); // 4


t0 = process.hrtime.bigint();
t1 = process.hrtime.bigint();
console.log(`Time: ${t1 - t0} nanoseconds`);