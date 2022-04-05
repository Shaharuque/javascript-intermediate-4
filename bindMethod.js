const kibria = {
    id: 101,
    money: 5000,
    kh:500,
    name: 'RJ Kibria',
    treatDey: function(expenses){  //object method //method ar moddhey object property access kortey chailey this keyword use kortey hoy
        this.money=this.money-expenses
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

//kibria.treatDey(100)

//With the bind() method, an object can borrow a method from another object.
/*const treatDeyGolam=kibria.treatDey.bind(normalGolam)
const remainedMoneyGolam=treatDeyGolam(1000)
const remainedMoneyGolam2=treatDeyGolam(1000)
console.log(remainedMoneyGolam)
console.log(remainedMoneyGolam2)*/

const treatDeyheroBalam=kibria.treatDey.bind(heroBalam) //firstly method get using bind and save the method to treatDeyheroBalam
console.log(treatDeyheroBalam(100))    //now call treatDeyheroBalam method/function