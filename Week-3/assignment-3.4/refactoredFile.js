function createStack() {
    let that = {};
    // console.log(that, "that");
    that.items = [];
    return {
        push(item) {
            that.items.push(item);
        },
        pop() {
            return that.items.pop();
        }
    };
}

const stack = createStack(); 
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined
console.log(this.items);// => undefined