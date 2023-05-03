class Employee{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    getDetails(){
        console.log(`the name of employee is ${this.name} and age is ${this.age}`);
    }
}

var emp=new Employee('Abhay',21);
emp.getDetails();

