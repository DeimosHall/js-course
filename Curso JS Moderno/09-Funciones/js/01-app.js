add(); // Work
function add() {
    console.log(2 + 2);
}

add2(); // Doesn't work
const add2 = function() {
    console.log(3 + 3);
}