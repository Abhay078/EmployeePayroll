class Shape{
    width:number
    length:number

    constructor(width:number,length:number){
        this.width=width;
        this.length=length;
        
    }
    getArea(){
        return this.width * this.length;
    }

    
}

class Rectangle extends Shape{

    constructor(width:number,length:number){
        super(width,length);
    }
    getPerimeter(){
        return 2 * (this.width+this.length);
    }

}

var rectangle=new  Rectangle(10,20);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());