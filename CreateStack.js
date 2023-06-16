//Creates a stack
var Stack = function() {
    this.count = 0; // keeps count of how many objects are in the stack
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++; //increament count up by 1
    }

    //Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count ===0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count; // is going to return that count which is the number of intems in the stack
    }

    //return the value at the end of the stack but wll not remove it
    this.peek = function() {
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("FreeCodeCamp");
console.log