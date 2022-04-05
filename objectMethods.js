//Object method property review
//object ar kono property tey function ditey holey shei function anonymous function hotey hoy
const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam:function(){            //takeExam property r value holo ekta anonymous function and its called method according to object concept
        console.log(this.name,'is giving Exam today')
    },
    treat:function(expense){
        this.money= (this.money-expense)  //money property new value will be set
        return this.money    //money property value will be returned
    }
}
//console.log(student['id'])

student.takeExam()  //as takeExam ar moddhey function set kora so normal function call ar moto aita call hobey


const remainingMoney=student.treat(200)
console.log(remainingMoney)
const remainingMoney2=student.treat(400)
console.log(remainingMoney2)