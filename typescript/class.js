var Student = /** @class */ (function () {
    function Student(name, age, isRegular) {
        this.age = age;
        this.isRegular = isRegular;
        this.name = name;
    }
    Student.prototype.getDetails = function () {
        console.log(this.name, this.age, this.isRegular);
    };
    return Student;
}());
var student = new Student('abhay', 1, true);
student.getDetails();
