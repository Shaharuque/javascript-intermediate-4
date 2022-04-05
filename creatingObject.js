//creating object in different ways
//1st way
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
//2nd way
const person2={}
//adding value to object property
person2.name="shaik"
person2.age=23

//3rd way 

const person3= new Object()
//adding value to object property
person3.name='ashik'
person3.age=55

console.log(person1,person2,person3)

//4th way inheritance ar concept use korey
const human=Object.create(person3) //person3 ar reference a human object create and person3 is parent here and human is child 
human.name='kaalam'  //person3 ar property can be used in human and human properties value can be set
human.color='blue'   //new property can be declared
console.log(human.color)

//5th way class diye object create(old tactics)
class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

const people1= new People('shaika',12)
console.log(people1)
