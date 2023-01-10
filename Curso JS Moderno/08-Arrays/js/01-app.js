const numbers = [10, 20, 30, 40, 50];
const numbers2 = new Array(10, 20, 30);

console.log(numbers);
console.log(numbers2);

const multipleItems = ["Hello", 15, 'Bye', true];
console.log(multipleItems);
console.log(multipleItems[1]);

function listItems(items) {
    items.forEach( (item, index) => {
        console.log(`${index}: ${item}`);
    });
}

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
listItems(items);
console.log(' ');
items.push('Item 7');
items.push('Items 8');
listItems(items);

// Delete the last item
items.pop();
console.log(' ');
listItems(items);

// Delete the first item
items.shift();
console.log(' ');
listItems(items);

// Delete multiple items
let start = 2;
let end = 4;
items.splice(start, end);
console.log(' ');
listItems(items);

// Destructuring
const [firstNumber, , thirdNumber] = numbers;
console.log(firstNumber);
console.log(thirdNumber);