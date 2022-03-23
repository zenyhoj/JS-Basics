const todos = [
{
    id: 1,
    task: 'Read Bible',
    isCompleted: true,
    priority: 'urgent'

},
{
    id: 2,
    task: 'Cook Food',
    isCompleted: true,
    priority: 'neutral'

},
{
    id: 3,
    task: 'Take a bath',
    isCompleted: false,
    priority: 'neutral'
}
];

/*Accessing Array of Objects using Higher Order Functions*/ 

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
    return todo.isCompleted === true && todo.priority === 'urgent';
}).map(function(todo){
    return todo.task;
});
console.log(todoCompleted);


/*OOP*/

//Creating the Object Person
class Person {
    constructor(firstName, lastName, dob) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }

    // creating a method
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
} 

// Instantiating an object
const person1 = new Person('Joe', 'Balingit', '05-15-1984');
const person2 = new Person('Zen', 'Balingit', '12-15-1985');

console.log(`${person1.getFullName()} was born on ${person1.getBirthYear()}` );
console.log(`${person2.getFullName()} was born on ${person2.getBirthYear()}` );