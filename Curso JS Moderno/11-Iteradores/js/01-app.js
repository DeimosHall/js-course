const tasks = ['Homework', 'Project', 'Eat'];

tasks.forEach((task, index) => {
    console.log(`Task ${index}: ${task}`);
});

tasks.map((task, index) => {
    console.log(`Task ${index}: ${task}`);
});

const tasks1 = tasks.forEach( task => task);
const tasks2 = tasks.map( task => task);

console.log(tasks1); // Undefined
console.log(tasks2);

console.log('For of');
for(let task of tasks) {
    console.log(task);
}

console.log('For in');
for(let task in tasks) {
    console.log(task);
}