
var car:string='Audi';
car='Maruti';
// car=1;

var fruits='banana';
fruits='apple';
// fruits=1;
{
    let game='snake';
    console.log(game);
}

let game='ladder';
console.log(game);

var numbers=[1,2,3];
numbers.push(4);
numbers.pop();
for(let i in numbers){
    console.log(numbers[i]);
}

var fruit: readonly string[]=['apple','banana'];
// fruit.push('mango');
for(let i of fruit){
    console.log(i);
}

let books:[number,string,number]=[1,'java',123]
books.push(1,'c#',345);
books.forEach(element => {
    console.log(element);
});

var employee:any[][]=[[1,'Abhay',20000],[2,'Nitik',19000],[3,'Prakhar',22000]];
employee.forEach(element => {
    console.log(element);
});

for(let i of employee){
    console.log(`Id-> ${i[0]}`);
}

