class Student{
    name:string
    age:number
    isRegular:boolean

    constructor(name:string,age:number,isRegular:boolean){
        this.age=age;
        this.isRegular=isRegular;
        this.name=name;
        

    }
    getDetails(){
        console.log(this.name,this.age,this.isRegular);
    }

}
var student=new Student('abhay',1,true);
student.getDetails();
