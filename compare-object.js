

//doita object dekhtey same but alada bhabey declare kora tara same object hobey na taader == or === diye compare kora jabey naa
/*const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };

//referential integrity: notun object create using old object then we can compare them using == or ===
//object copy
const third=first

if(first===third){
    console.log('both same')
}
else{
    console.log('both different')
}*/

//object compare (simple bhabey declare kora object can be compared like this )
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
function compareObject(first,second){
    if(Object.keys(first).length !== Object.keys(second).length){
        return false;               //remember: function kicho return korley sei function ar execution oikhanei shes hoye jay nichey ar jay na
    }

    for(let key in first){
        if(first[key]===second[key]){ 
            return true             
        }
        else{
            return false
        }
    }
}

const result=compareObject(first,second)
if(result===true){
    console.log('both object same')
}
else{
    console.log('both object different')
}