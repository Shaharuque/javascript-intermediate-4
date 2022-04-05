const kibria = {
    id: 101,
    money: 5000,
    kh:500,
    name: 'RJ Kibria',
    treatDey: function(expenses,bokshish){  //object method //method ar moddhey object property access kortey chailey this keyword use kortey hoy
        this.money=this.money-expenses-bokshish
        console.log(this)  //this:-object ar moddher instance varible gula key:value show korbey
        return this.money
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}

/*//using call() and apply() i can use another objects method/function directly for heroBalam object 

const remainingTakaofBalam=kibria.treatDey.call(heroBalam,1000,500)
console.log(remainingTakaofBalam)
//again method call
const remainingTakaofBalam2=kibria.treatDey.call(heroBalam,500,500)
console.log(remainingTakaofBalam2)

//now for normalGolam object
const remainingTakaofGolam=kibria.treatDey.call(normalGolam,5000,500)
console.log(remainingTakaofGolam)*/


//using apply()-> ek object ar method different kono object a use
//##for call() parameter pass korar smy segula comma separation use korey korbo
//##for apply() parameter pass korar smy segula ekta array tey rekhey use korey korbo
//aitae difference between apply() and call()

remainingTakaofBalamUsingApply=kibria.treatDey.apply(heroBalam,[850,500])
console.log(remainingTakaofBalamUsingApply)






//Lastly i want to say bind() , call() ,apply()  these all are used to borrow method from one object and use that method into another object to do something
//Methods like call(), apply(), and bind() can refer this to any object.