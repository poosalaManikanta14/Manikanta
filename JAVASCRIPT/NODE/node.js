class hello{
    constructor(){
        this.age = 100;
    }

    raj = function(){
        console.log(this.age);
        
    }
}


var obj = new hello();
console.log(obj.raj);


