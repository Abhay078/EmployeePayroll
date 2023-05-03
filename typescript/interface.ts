interface student{
    name:string
    age:number
    courses: string[]
    totalfees:number
    DuePaid:(feesPaid:number)=>number;
}

class Mintu implements student{
    name='Mintu Sharma'
    age=20
    courses=['Java','C#','Angular']
    totalfees= 10000
    constructor(){

    }
    DuePaid(feesPaid: number): number {
        let due=(this.totalfees-feesPaid)
        return due;
    }
    GetDetails(){
        console.log(`Name:-${this.name}  Age:-${this.age}  Courses:-${this.courses}`)
    }

}
var mintu=new Mintu();
var result:number=mintu.DuePaid(2000);
console.log(`The Due Fees is ${result}`);
mintu.GetDetails();

