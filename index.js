// Your code here
class Cat{
 constructor(aname , sex){
    this.aname = aname;
    this.sex = sex;
 }
 speak(){
    console.log(`${this.aname} says meow!`);
 }
}
class Dog{
    constructor(aname , sex){
        this.aname = aname;
        this.sex = sex;
    }
    speak(){
        console.log(`${this.aname} always barks`);
    }
}
class Bird{
    constructor(aname , sex){
        this.aname = aname;
        this.sex = sex;
    }
    speak(){
        if(this.sex === male){
            console.log(`${this.aname} this is the parrot`);
        }else{
            console.log(`${this.aname} i squawk`);
        }
       
    }

}