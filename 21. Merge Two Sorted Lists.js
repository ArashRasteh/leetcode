function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // console.log(list1, list2)
//     let headNode = null
//     let currNode = null
//     while (list1?.val != null || list2?.val != null) {
//         if (list1?.val != null && list2?.val != null ) {
//             if (list1.val < list2.val) {
//                 newNode = new ListNode(list1.val)
//                 list1 = list1.next
//             } else {
//                 newNode = new ListNode(list2.val)
//                 list2 = list2.next
//             }
//         } else if (list1?.val != null) {
//             newNode = new ListNode(list1.val)
//             list1 = list1.next
//         } else {
//             newNode = new ListNode(list2.val)
//             list2 = list2.next
//         }

//         if (headNode === null) {
//             headNode = newNode;
//             currNode = headNode;
//         } else {
//             currNode.next = newNode;
//             currNode = currNode.next
//         }
//     }

//     return headNode
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    let headNode = new ListNode()
    let currNode = headNode;
    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val < list2.val) {
                currNode.next = list1;
                list1 = list1.next;
            } else {
                currNode.next = list2;
                list2 = list2.next;
            }
        } else if (list1) {
            currNode.next = list1;
            list1 = list1.next;
        } else {
            currNode.next = list2;
            list2 = list2.next;
        }
        currNode = currNode.next;
    }
    return headNode.next;
};



console.log(mergeTwoLists(null, null))
let result = mergeTwoLists(new ListNode(1, new ListNode(3, new ListNode(4))), new ListNode(1, new ListNode(2, new ListNode(4))));
console.log(result)
result = mergeTwoLists(null, new ListNode(0))
console.log(result)

exit(0)

