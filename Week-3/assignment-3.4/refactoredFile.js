function createStack() {
    let items = [];
    let itemAtTop;
    return {
        push: (item) => {
            itemAtTop = item;
            items.push(item);
        },
        pop: () => {
            items.length -= 1;
            return itemAtTop;
        }
    };
}

const stack = createStack(); 
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined
console.log(this.items);// => undefined