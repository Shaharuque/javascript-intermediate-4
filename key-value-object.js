const obj={
    name:'sha',
    age:27,
    daak:'mewao'
}

const keys=Object.keys(obj)  //to get all the key within object
console.log(keys)
const values=Object.values(obj)
console.log(values)
const keyValuePair=Object.entries(obj) //to get key-value pair of a object in return it give array of array->[ [ 'name', 'sha' ], [ 'age', 27 ] ]
console.log(keyValuePair) //output->[ [ 'name', 'sha' ], [ 'age', 27 ] ]

//-----------------------
//adding new property to object
obj.salary=2000
console.log(obj)
//-------------------------------------
//to forcefully prevent deletation of property in a object we can use seal
Object.seal(obj)  //deletation will not work on 'obj' object now
//delete property from object
delete obj.name
// console.log(obj)

obj.salary=4000  //modification can be done after usin Object.seal(obj name)
console.log(obj)


//-------------
Object.freeze(obj)

obj.name='korim'  //cann't modify property value
obj.isMale='male' //cann't Insert new property and cann't delete property 
console.log(obj)


//-----------------object loop through process
const others={
    other:{
      wam:'no',
        bettry:'yes',
        age:27,  
    },
    

}
//using map loop through
Object.entries(others.other).map(
    ([key, value]) => console.log(`${key}:${value}`)
);