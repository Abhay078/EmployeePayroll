var car = 'Audi';
car = 'Maruti';
// car=1;
var fruits = 'banana';
fruits = 'apple';
// fruits=1;
{
    var game_1 = 'snake';
    console.log(game_1);
}
var game = 'ladder';
console.log(game);
var numbers = [1, 2, 3];
numbers.push(4);
numbers.pop();
for (var i in numbers) {
    console.log(numbers[i]);
}
var fruit = ['apple', 'banana'];
// fruit.push('mango');
for (var _i = 0, fruit_1 = fruit; _i < fruit_1.length; _i++) {
    var i = fruit_1[_i];
    console.log(i);
}
var books = [1, 'java', 123];
books.push(1, 'c#', 345);
books.forEach(function (element) {
    console.log(element);
});
var employee = [[1, 'Abhay', 20000], [2, 'Nitik', 19000], [3, 'Prakhar', 22000]];
employee.forEach(function (element) {
    console.log(element);
});
for (var _a = 0, employee_1 = employee; _a < employee_1.length; _a++) {
    var i = employee_1[_a];
    console.log(i[0]);
}
