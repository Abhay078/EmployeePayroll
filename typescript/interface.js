var Mintu = /** @class */ (function () {
    function Mintu() {
        this.name = 'Mintu Sharma';
        this.age = 20;
        this.courses = ['Java', 'C#', 'Angular'];
        this.totalfees = 10000;
    }
    Mintu.prototype.DuePaid = function (feesPaid) {
        var due = (this.totalfees - feesPaid);
        return due;
    };
    Mintu.prototype.GetDetails = function () {
        console.log("Name:-".concat(this.name, "  Age:-").concat(this.age, "  Courses:-").concat(this.courses));
    };
    return Mintu;
}());
var mintu = new Mintu();
var result = mintu.DuePaid(2000);
console.log("The Due Fees is ".concat(result));
mintu.GetDetails();
