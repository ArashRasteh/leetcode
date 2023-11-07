
var MyQueue = function() {
    this.pushStack = []
    this.popStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.popStack.length > 0) {
        this.pushStack.push(this.popStack.pop())
    }
    
    this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop())
    }
    return this.popStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.pushStack.length > 0) {
        return this.pushStack[0]
    } else {
        return this.popStack[this.popStack.length - 1]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.pushStack.length == 0 && this.popStack.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */