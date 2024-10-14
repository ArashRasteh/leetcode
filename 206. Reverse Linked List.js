
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // let nodes = []
  // let curr = head;
  // nodes.push(curr);
  // while(curr.next != null) {
  //     curr = curr.next;
  //     nodes.push(curr);
  // }
  // console.log(nodes)

  if (!head) return null;
  let curr;
  let revHead;

  function revList(node) {
      if (node.next) {
          revList(node.next)

          curr.next = new ListNode(node.val);
          curr = curr.next;
      } else {
          revHead = new ListNode(node.val);
          curr = revHead;
      }
  }
  revList(head);

  return revHead;

};

let a = new ListNode(5)
let b = new ListNode(4, a)
let c = new ListNode(3, b)
let d = new ListNode(2, c)
let e = new ListNode(1, d)


console.log(JSON.stringify(reverseList(e)))
