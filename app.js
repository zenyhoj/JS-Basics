const todos = [
{
    id: 1,
    task: 'Read Bible',
    isCompleted: true

},
{
    id: 2,
    task: 'Cook Food',
    isCompleted: true
},
{
    id: 3,
    task: 'Take a bath',
    isCompleted: false
}
];

//Foreach
todos.forEach(function(todo){
    console.log(todo.task);
});

//Map - returns an array
const todoTasks = todos.map(function(todo){
    return todo;
});
console.log(todoTasks);

//Filter and return an array of filted objects
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.task;
});
console.log(todoCompleted);

