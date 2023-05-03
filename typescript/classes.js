var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getDetails = function () {
        console.log("the name of employee is ".concat(this.name, " and age is ").concat(this.age));
    };
    return Employee;
}());
var emp = new Employee('Abhay', 21);
emp.getDetails();
